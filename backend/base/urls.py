from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('country/', views.getCountry, name="routes"),
    path('category/<str:pk>', views.getCountryWiseCategory, name="routes"),
    path('video/<str:pk>', views.getVideoDetails, name="routes"),
    path('video-action/<str:pk>', views.getVideoInteractions, name="routes"),
]