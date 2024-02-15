
from django.contrib import admin
from django.urls import path, include
from openapp.views import chat_view
from .views import Login, Join

urlpatterns = [
    path('login', Login.as_view(), name='login'),
    path('join', Join.as_view(), name='join'),
]
