from django.db import models
from django.contrib.auth.models import User
from django.core.validators import FileExtensionValidator

# Create your models here.
class Country(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    language = models.CharField(max_length=255, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    active = models.BooleanField(default=False)
    createdAt = models.DateTimeField(auto_created=True)
    modifiedAt = models.DateTimeField(auto_created=True)
    id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name

class Category(models.Model):
    country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True)
    user =  models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    active = models.BooleanField(default=False)
    createdAt = models.DateTimeField(auto_created=True)
    modifiedAt = models.DateTimeField(auto_created=True)
    id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name

class Video(models.Model):
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    user =  models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200, null=True, blank=True)
    details = models.CharField(max_length=500, null=True, blank=True)
    thumb = models.ImageField(null=True, blank=True)
    video = models.FileField(upload_to='videos_uploaded',null=True, validators=[FileExtensionValidator(allowed_extensions=['MOV','avi','mp4','webm','mkv'])])
    active = models.BooleanField(default=False)
    createdAt = models.DateTimeField(auto_created=True)
    modifiedAt = models.DateTimeField(auto_created=True)
    id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.title

class VideoAction(models.Model):
    video = models.ForeignKey(Video, on_delete=models.SET_NULL, null=True)
    user =  models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200, null=True, blank=True)
    details = models.CharField(max_length=500, null=True, blank=True)
    thumb = models.ImageField(null=True, blank=True)
    video = models.FileField(upload_to='videos_uploaded',null=True, validators=[FileExtensionValidator(allowed_extensions=['MOV','avi','mp4','webm','mkv'])])
    startTime = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    duration = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    active = models.BooleanField(default=False)
    createdAt = models.DateTimeField(auto_created=True)
    modifiedAt = models.DateTimeField(auto_created=True)
    id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.title





