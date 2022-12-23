from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Country
from .models import Category

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'