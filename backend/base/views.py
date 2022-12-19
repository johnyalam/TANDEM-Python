from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .category import category
from .countryjson import country
from .videoactionsjson import videoActions

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes =[
        '/api/country/',
        '/api/category/<id>',
        '/api/video/<id>',
        '/api/video-action/<id>',
    ]
    return Response(routes)

@api_view(['GET'])
def getCountry(request):
    return Response(country)

@api_view(['GET'])
def getCountryWiseCategory(request, pk):
    return Response(category)

@api_view(['GET'])
def getVideoDetails(request, pk):
    video = None
    for i in category:
        if i['_id'] == pk:
            video = i
            break
    return Response(video)

@api_view(['GET'])
def getVideoInteractions(request, pk):
    return Response(videoActions)

