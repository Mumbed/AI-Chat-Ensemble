from django.db import models
from user.models import CustomUser

class Chat(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    question = models.TextField()
    response = models.TextField()
    source = models.CharField(max_length=100)  # 'source' 필드 추가

    def __str__(self):
        return f"Chat {self.id} by {self.user.email}"