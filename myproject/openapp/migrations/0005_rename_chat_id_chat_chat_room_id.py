# Generated by Django 5.0.2 on 2024-02-22 01:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('openapp', '0004_remove_chat_id_chat_chat_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='chat',
            old_name='chat_id',
            new_name='chat_room_id',
        ),
    ]
