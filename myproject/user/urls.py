
from django.contrib import admin
from django.urls import path, include
from openapp.views import CreateRoom
from .views import Login, Register

urlpatterns = [
    path('login/', Login.as_view(), name='login'),
    path('register/', Register.as_view(), name='register'),
    path('createRoom/', CreateRoom.as_view(), name='createRoom'),
    path('', Login.as_view(), name='login'),

]
