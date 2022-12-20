from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Country

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'