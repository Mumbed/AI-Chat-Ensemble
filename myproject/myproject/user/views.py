from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import CustomUser
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
from django.contrib.auth.hashers import make_password
from uuid import uuid4

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class Login(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = CustomUser.objects.filter(email=email).first()
        if user is None or not user.check_password(password):
            return Response({
                'access': False,
                'error': 'Invalid email or password.'
            }, status=400)
        tokens = get_tokens_for_user(user)
        return Response({
            'tokens': tokens,
            'access': True,
            'email': user.email,
        }, status=200)
        

class Register(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        name = request.data.get('name')
        email = request.data.get('email')
        password = request.data.get('password')
        verify = request.data.get('verify')
        if CustomUser.objects.filter(email=email).exists() or password != verify:
            return Response({
                'access': False,
                'error': 'Email is already in use or the passwords do not match.'
            }, status=400)
        
        user = CustomUser.objects.create(
            name=name,
            email=email,
            password=make_password(password),
        )
        
        tokens = get_tokens_for_user(user)
        return Response({
            'tokens': tokens,
            'email': email,
            'access': True,
        }, status=201)

class CreateRoom(APIView):
    def post(self, request):
        chat_room_id = uuid4().hex  # Generate a new UUID for the chat room ID

        user_id = request.data.get('token', None)
        Chat.objects.create(chat_room_id=new_chat_room_id, user_id=user_id)

        return Response(chat_room_id, status=200)