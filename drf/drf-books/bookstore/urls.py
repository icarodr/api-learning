from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from books.api.viewsets import BookViewSets

route = routers.DefaultRouter()
route.register(r'books', BookViewSets, basename='Books')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(route.urls)),
]
