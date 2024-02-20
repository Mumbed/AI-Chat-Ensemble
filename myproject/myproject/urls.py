
from django.contrib import admin
from django.urls import path, include
from openapp.views import chat_view, main_view, create_chat
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('chat/<uuid:chat_id>/', chat_view, name='chat'),
    path('main/', main_view, name='main'),
    path('create_chat/', create_chat, name='create_chat'),

    path('', include('user.urls')),    
]
