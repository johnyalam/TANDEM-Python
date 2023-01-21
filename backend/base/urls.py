from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('country/', views.getCountry, name="routes"),
    path('category/', views.getCountryWiseCategory, name="routes"),
    path('video/<str:pk>', views.getVideoDetails, name="routes"),
    # path('video-action/<str:pk>', views.getVideoInteractions, name="routes"),
]