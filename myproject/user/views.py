from django.shortcuts import redirect, render
from rest_framework.views import APIView
from .models import CustomUser
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth import authenticate, login

from rest_framework.response import Response
from uuid import uuid4
import os

class Login(APIView):
    def get(self, request):
        return render(request, 'user/login.html')

    def post(self, request):
        email = request.data.get('email', None)
        password = request.data.get('password', None)
        if email is None:
            return Response(status=400, data=dict(message='이메일이 입력되지 않았습니다.'))

        if password is None:
            return Response(status=400, data=dict(message='비밀번호가 입력되지 않았습니다.'))

        user = CustomUser.objects.filter(email=email).first()
        if user is None:
            return Response(status=400, data=dict(message='해당 이메일 주소로 가입된 계정이 없습니다.'))

        if check_password(password, user.password) is False:
            return Response(status=400, data=dict(message='입력정보가 잘못되었습니다.'))

        request.session['loginCheck'] = True
        request.session['email'] = user.email
        if user is not None:
            login(request,user=user)
            return redirect('/chat')
        return Response(status=200, data=dict(message='로그인 성공'))


class Join(APIView):
    def get(self, request):
        return render(request, 'user/join.html')

    def post(self, request):
        password = request.data.get('password')
        email = request.data.get('email')
        name = request.data.get('name')

        if CustomUser.objects.filter(email=email).exists() :
            return Response(status=400, data=dict(message='해당 이메일 주소로 이미 가입된 계정이 존재합니다.'))
        CustomUser.objects.create(password=make_password(password),
                            email=email,
                            name=name)

        return Response(status=200, data=dict(message="회원가입 성공했습니다. 로그인 해주세요."))