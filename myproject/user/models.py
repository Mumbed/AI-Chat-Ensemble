from django.contrib.auth.models import AbstractBaseUser
from django.db import models

class CustomUser(AbstractBaseUser):
    name = models.CharField(max_length=24)
    email = models.EmailField(unique=True)
    token = models.CharField(max_length=30)

    USERNAME_FIELD = 'email'
    class Meta:
        db_table = "User"