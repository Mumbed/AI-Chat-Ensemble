from django.db import models
# from user.models import CustomUser
import uuid

from user.models import CustomUser


class Chat(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    question = models.TextField()
    response = models.TextField()
    source = models.CharField(max_length=100)  # Add 'source' field
    chat_room_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=False)

    def __str__(self):
        return f"Chat {self.id} by {self.user.email}"