from django.urls import path
from .views import start_game, Snake_game, Welcome
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", Welcome, name="Welcom"),
    path("start/", start_game, name="start_game"),
    path("snake/", Snake_game, name="Snake"),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
