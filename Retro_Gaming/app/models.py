from django.db import models


class Game(models.Model):
    score = models.IntegerField(default=0)
    level = models.IntegerField(default=1)


class Block(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    position_x = models.IntegerField()
    position_y = models.IntegerField()
    color = models.CharField(max_length=50)
