from django.db import models

# Create your models here.
class Book(models.Model):
    titulo = models.CharField(max_length=255)
    ano = models.DateField()
    autor = models.CharField(max_length=255)
    