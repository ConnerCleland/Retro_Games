# app/models.py

from django.db import models


class Game(models.Model):
    score = models.IntegerField(default=0)
    level = models.IntegerField(default=1)


class Block(models.Model):
    position_x = models.IntegerField()
    position_y = models.IntegerField()
    color = models.CharField(max_length=50)
