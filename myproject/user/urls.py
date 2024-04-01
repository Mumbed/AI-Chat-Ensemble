
from django.contrib import admin
from django.urls import path, include
from openapp.views import chat_view
from .views import Login, Register

urlpatterns = [
    path('login/', Login.as_view(), name='login'),
    path('register/', Register.as_view(), name='register'),
    path('', Login.as_view(), name='login'),

]
