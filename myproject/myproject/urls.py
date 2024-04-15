
from django.contrib import admin
from django.urls import path, include
from openapp.views import chat_view, main_view, CreateRoom, test, get_user

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('chat/<str:chat_room_id>/', chat_view, name='chat'),  # Changed int to str for UUID
    path('main/', main_view, name='main'),
    path('createRoom/', CreateRoom.as_view(), name='createRoom'),
    path('test/', test),
    path('api/user', get_user, name='api-user'),
    path('', include('user.urls')),    
]
