from django.shortcuts import render
from .models import Game, Block


def start_game(request):
    game = Game.objects.create()
    return render(request, "app/start_game.html", {"game": game})


def move_block(request):
    block = Block.objects.create(position_x=0, position_y=0, color="red")
    return render(request, "app/move_block.html", {"block": block})
