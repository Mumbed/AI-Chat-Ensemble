from venv import logger
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Chat
from uuid import uuid4
from rest_framework.decorators import api_view
from django.http import JsonResponse
from openai import OpenAI
import google.generativeai as genai
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.db.models import Count

@api_view(['POST'])
def chat_view(request, chat_room_id):
    # question = request.data.get('question')
    source = request.data.get('source')
    user = request.user
    if 'preferences' in request.data:
        # 선호도가 포함된 경우 초기 질문 생성
        preferences = request.data.get('preferences', {})
        question = generate_initial_question(preferences)
    else:
        # 기존 질문 사용
        question = request.data.get('question')
    previous_chats = Chat.objects.filter(user=user, chat_room_id=chat_room_id)

    history = []
    for chat in previous_chats:
        history.append({'role': 'user', 'parts': [chat.question]})

    # 새 질문을 history에 추가
    history.append({'role': 'user', 'parts': [question]})
    response_text = None

    if source == 'gpt':
        genai.configure(api_key='AIzaSyCMVHWd3RMEqRzUGgqOI2oHg5HjPj1Ka5I')
        model = genai.GenerativeModel('gemini-pro')
        # parts 대신 history 전달
        response = model.generate_content(history)
        if response.parts:
            response_text = response.parts[0].text
            # 응답을 history에 추가
            history.append({'role': 'user', 'parts': [response_text]})
        
    elif source == 'gemini':
        genai.configure(api_key='AIzaSyC7ipeMCe1gBUGTy-Q0AxLIyrL-A4-Ma-Q')
        model = genai.GenerativeModel('gemini-pro')
        # parts 대신 history 전달
        response = model.generate_content(history)
        if response.parts:
            response_text = response.parts[0].text
            # 응답을 history에 추가
            history.append({'role': 'user', 'parts': [response_text]})

    # 데이터베이스에 저장
    Chat.objects.create(user=user, question=question, response=response_text, source=source, chat_room_id=chat_room_id)

    # 응답 반환
    return Response({"question": question, "response": response_text}, status=200)

class CreateRoom(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        try:
            chat_room_id = uuid4().hex
            user_id = request.user.id
            Chat.objects.create(chat_room_id=chat_room_id, user_id=user_id)
            return Response({"chat_room_id": chat_room_id}, status=200)
        except Exception as e:
            return Response({"error": str(e)}, status=500)


def generate_initial_question(preferences):
    # 선호도에 따른 질문 생성 로직 구현
    topic = preferences.get('majorTopic')
    details = preferences.get('details', {})
    if topic == "Coding":
        return f"Can you describe your current coding issue with {details.get('language')}?"
    elif topic == "Language":
        return f"What specific language help do you need with {details.get('language')}?"
    elif topic == "Physics":
        return f"What physics concept are you struggling with in {details.get('topic')}?"
    return "Tell me more about your preferences."


@api_view(['GET'])
def fetch_chat_history(request, chat_room_id):
    try:
        # Ensure that chat_room_id is being passed correctly and can be used to filter Chat objects
        chats = Chat.objects.filter(chat_room_id=chat_room_id).order_by('created_at')
        if not chats.exists():
            return Response({'error': 'No chats found for this room'}, status=404)
        chat_data = [{
            'id': chat.id,
            'question': chat.question,
            'response': chat.response,
            'source': chat.source,
            'user_id': chat.user_id
        } for chat in chats]
        return Response(chat_data, status=200)
    except Exception as e:
        # Log the exception to understand what went wrong
        logger.error(f"Failed to fetch chat history: {str(e)}")
        return Response({'error': str(e)}, status=500)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_chat_rooms(request):
    chat_rooms = Chat.objects.values('chat_room_id').annotate(count=Count('id')).order_by('chat_room_id')
    chat_rooms_list = [{'chat_room_id': cr['chat_room_id'], 'messages_count': cr['count']} for cr in chat_rooms]
    print("Chat Rooms:", chat_rooms_list)  # Debug output

    return Response(chat_rooms_list)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_chat_room(request, chat_room_id):
    try:
        # chat_room_id와 사용자 ID로 필터링하여 해당 채팅방에 속한 모든 채팅 인스턴스를 삭제
        chat_rooms = Chat.objects.filter(chat_room_id=chat_room_id, user=request.user)
        if not chat_rooms.exists():
            return Response({"error": "Chat room not found"}, status=404)
        chat_rooms.delete()
        return Response({"message": "Chat room deleted successfully"}, status=204)
    except Exception as e:
        logger.error(f"Error deleting chat room: {str(e)}")
        return Response({"error": str(e)}, status=500)
