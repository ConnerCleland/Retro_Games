from django.urls import path
from .views import start_game, Snake_game, Welcome, Pong_game, Dino_game, PacMan_game
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", Welcome, name="Welcom"),
    path("start/", start_game, name="start_game"),
    path("snake/", Snake_game, name="Snake"),
    path("Pong/", Pong_game, name="Pong"),
    path("dino/", Dino_game, name="dino"),
    path("PacMan/", PacMan_game, name="PacMan"),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
