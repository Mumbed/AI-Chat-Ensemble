from django.db import models

class Chat(models.Model):
    id = models.AutoField(primary_key=True)
    question = models.TextField()
    response = models.TextField()
    source = models.CharField(max_length=100)  # 'source' 필드 추가

    def __str__(self):
        return f"Chat {self.id}"
