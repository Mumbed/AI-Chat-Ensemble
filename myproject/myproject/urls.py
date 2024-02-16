
from django.contrib import admin
from django.urls import path, include
from openapp.views import chat_view, main_view
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('chat/', chat_view, name='chat'),
    path('main/', main_view, name='main'),
    path('', include('user.urls')),    
]
