from django.urls import path
from .views import start_game, move_block

urlpatterns = [
    path("", start_game, name="start_game"),
    path("start/", start_game, name="start_game"),
    path("move/", move_block, name="move_block"),
]
