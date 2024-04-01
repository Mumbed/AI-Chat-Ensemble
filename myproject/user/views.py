from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import CustomUser  # Assuming ChatRoom is a model that contains chat room information for a user
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
from django.contrib.auth.hashers import make_password
import secrets

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class Login(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        token = request.data.get('token')
        if token:
            try:
                user = CustomUser.objects.get(token=token)
                new_token = get_tokens_for_user(user)
                #chat_rooms = list(user.chatroom_set.values_list('name', flat=True))
                return Response({
                    'token': new_token,
                    'access': True,
                    'email': user.email,
                    #'chat_rooms': chat_rooms
                }, status=200)
            except CustomUser.DoesNotExist:
                return Response({
                    'access': False,
                    'error': '유효하지 않은 토큰입니다.'
                }, status=400)
        else:
            email = request.data.get('email')
            password = request.data.get('password')
            user = CustomUser.objects.filter(email=email).first()
            if user is None or not user.check_password(password):
                return Response({
                    'access': False,
                    'error': '이메일 또는 비밀번호가 잘못되었습니다.'
                }, status=400)
            new_token = get_tokens_for_user(user)
            #chat_rooms = list(user.chatroom_set.values_list('name', flat=True)) 
            return Response({
                'token': new_token['access'],
                'access': True,
                'email': user.email,
                #'chat_rooms': chat_rooms
            }, status=200)

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class Register(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        #4개 받아오기
        name = request.data.get('name')
        email = request.data.get('email')
        password = request.data.get('password')
        verify = request.data.get('verify')
        if CustomUser.objects.filter(email=email).exists() or password != verify:
            return Response({
                'access': False,
                'error': '이메일이 이미 사용 중이거나 비밀번호가 일치하지 않습니다.'
            }, status=400)
        
        #만약 if문에 걸리지 않으면 랜덤한 토큰으로 생성
        user = CustomUser.objects.create(
            name=name,
            email=email,
            password=make_password(password),
            token=secrets.token_urlsafe()
        )
        
        token = get_tokens_for_user(user)
        
        chat_rooms = list(user.chatroom_set.values_list('name', flat=True)) if hasattr(user, 'chatroom_set') else []
        return Response({
            'token': token['access'],
            'email': email,
            'access': True,
            'chat_rooms': chat_rooms
        }, status=201)