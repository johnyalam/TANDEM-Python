from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Country(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    language = models.CharField(max_length=255, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    active = models.CharField(max_length=255, null=True, blank=True)
    createdAt = models.DateTimeField(auto_created=True)
    modifiedAt = models.DateTimeField(auto_created=True)
    id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name
        


