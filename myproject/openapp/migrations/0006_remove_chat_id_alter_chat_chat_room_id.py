# Generated by Django 5.0.2 on 2024-02-22 01:45

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('openapp', '0005_remove_chat_chat_id_chat_chat_room_id_chat_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chat',
            name='id',
        ),
        migrations.AlterField(
            model_name='chat',
            name='chat_room_id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
