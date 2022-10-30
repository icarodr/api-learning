from rest_framework import viewsets
from books.api.serializers import BookSerializers
from books.models import Book

class BookViewSets(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializers