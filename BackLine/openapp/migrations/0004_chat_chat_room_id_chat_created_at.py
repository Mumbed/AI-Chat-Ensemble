# Generated by Django 5.0.2 on 2024-05-13 08:04

import datetime
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('openapp', '0003_chat_user_alter_chat_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='chat',
            name='chat_room_id',
            field=models.UUIDField(default=uuid.uuid4, editable=False),
        ),
        migrations.AddField(
            model_name='chat',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2022, 1, 1, 12, 0)),
            preserve_default=False,
        ),
    ]
