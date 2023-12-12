from django.shortcuts import render
from .models import Game


def start_game(request):
    game = Game.objects.create()
    grid_columns = 10
    grid_rows = 10
    block_width = 20
    block_height = 20

    canvas_width = grid_columns * block_width
    canvas_height = grid_rows * block_height

    return render(
        request,
        "app/start_game.html",
        {
            "game": game,
            "canvas_width": canvas_width,
            "canvas_height": canvas_height,
        },
    )


def Snake_game(request):
    return render(
        request,
        "app/Snake.html",
    )


def index(request):
    return render(request, "app/index.html")


def Pong_game(request):
    return render(request, "app/Pong.html")


def Dino_game(request):
    return render(request, "app/dino.html")


def PacMan_game(request):
    return render(request, "app/PacMan.html")

def Space_game(request):
    return render(request, "app/space.html")
