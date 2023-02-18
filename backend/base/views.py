from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Country
from .models import Category
from .models import Video
from .models import Action

from .serailizers import CountrySerializer, CategorySerializer, VideoSerializer, ActionSerializer


# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes =[
        '/api/country/',
        '/api/category/',
        '/api/video/<id>',
        '/api/video-action/<id>',
    ]
    return Response(routes)

@api_view(['GET'])
def getCountry(request):
    country = Country.objects.all()
    serializers = CountrySerializer(country, many = True)
    return Response(serializers.data)

@api_view(['GET'])
def getCountryWiseCategory(request):
    category = Category.objects.all()
    serializers = CategorySerializer(category, many = True)
    return Response(serializers.data)

@api_view(['GET'])
def getVideoDetails(request, pk):
    videos = Video.objects.filter(country=pk)
    serializers = VideoSerializer(videos, many = True)
    return Response(serializers.data)

@api_view(['GET'])
def getSingleVideo(request, pk):
    videos = Video.objects.filter(id=pk)
    serializers = VideoSerializer(videos, many = True)
    return Response(serializers.data)

@api_view(['GET'])
def getVideoInteractions(request, pk):
    actions = Action.objects.filter(video=pk).order_by('startTime')
    serializers = ActionSerializer(actions, many = True)
    return Response(serializers.data)

