from django.shortcuts import render
from .models import Chat
from user.models import CustomUser
from django.shortcuts import redirect
from uuid import uuid4
from openai import OpenAI
import google.generativeai as genai
from django.contrib.auth.decorators import login_required

GOOGLE_API_KEY = "AIzaSyC7ipeMCe1gBUGTy-Q0AxLIyrL-A4-Ma-Q"
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel('gemini-pro')
def chat_view(request, chat_id):
    try:
        chat = Chat.objects.get(chat_id=chat_id)

    except Chat.DoesNotExist:
        chat = None

    if request.method == 'POST':
        question = request.POST.get('question')
        source = request.POST.get('source')
        user = request.user
        if source == 'gpt':
            client = OpenAI(api_key='your_openai_api_key_here')
            completion = client.chat.completions.create(
                model='gpt-3.5-turbo',
                messages=[{"role": "user", "content": question}]
            )
            response = completion.choices[0].message.content
            Chat.objects.create(user=user, question=question, response=response, source='gpt')
        elif source == 'gemini':
            response = model.generate_content(question)
            if response.parts:
                Chat.objects.create(user=user,question=question, response=response.parts[0].text, source='gemini')
    
    gpt_chats = Chat.objects.filter(source='gpt', user=request.user)
    gemini_chats = Chat.objects.filter(source='gemini', user=request.user)
    return render(request, 'openapp/chat.html', {'gpt_chats': gpt_chats, 'gemini_chats': gemini_chats, 'chat': chat, 'chat_id': chat_id})

def main_view(request):
    chats = Chat.objects.all()
    users = CustomUser.objects.all()
    return render(request, 'openapp/main.html', {'chats': chats, 'users': users})

def create_chat(request):
    new_chat_id = uuid4()
    user_id = request.user.id if request.user.is_authenticated else None

    Chat.objects.create(chat_id=new_chat_id, user_id=user_id)
    return redirect('chat', chat_id=new_chat_id)