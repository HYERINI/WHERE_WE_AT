from django.db import models

class Cafe(models.Model):
    name=models.CharField(max_length=15)
    location=models.CharField(max_length=50, dafault='')

    latitude = models.FloatField(default=0.0)
    longitude=models.FloatField(default=0.0)
    
