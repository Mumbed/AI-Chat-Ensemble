from django.shortcuts import render
from .models import Chat
from openai import OpenAI
import google.generativeai as genai

GOOGLE_API_KEY = "AIzaSyC7ipeMCe1gBUGTy-Q0AxLIyrL-A4-Ma-Q"
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel('gemini-pro')

def chat_view(request):
    if request.method == 'POST':
        question = request.POST.get('question')
        source = request.POST.get('source')
        if source == 'gpt':
            client = OpenAI(api_key='your_openai_api_key_here')
            completion = client.chat.completions.create(
                model='gpt-3.5-turbo',
                messages=[{"role": "user", "content": question}]
            )
            response = completion.choices[0].message.content
            Chat.objects.create(question=question, response=response, source='gpt')
        elif source == 'gemini':
            response = model.generate_content(question)
            if response.parts:
                Chat.objects.create(question=question, response=response.parts[0].text, source='gemini')
    
    gpt_chats = Chat.objects.filter(source='gpt')
    gemini_chats = Chat.objects.filter(source='gemini')
    return render(request, 'openapp/chat.html', {'gpt_chats': gpt_chats, 'gemini_chats': gemini_chats})
