from django.contrib import admin
from .models import Country
from .models import Category
from .models import Video
from .models import VideoAction

# Register your models here.
admin.site.register(Country)
admin.site.register(Category)
admin.site.register(Video)
admin.site.register(VideoAction)