from django.shortcuts import render
from .models import Game, Block


def start_game(request):
    game = Game.objects.create()
    grid_columns = 10  # Replace with your actual value
    grid_rows = 10  # Replace with your actual value
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


def move_block(request):
    block = Block.objects.create(position_x=0, position_y=0, color="red")
    return render(request, "app/move_block.html", {"block": block})
