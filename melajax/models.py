from django.db import models
from django.forms import ModelForm

class House(models.Model):
    HOUSE_CHOICES = (
        ('br', 'bedroom(s)'),
        ('h', 'house,cottage,villa, semi,terrace'),
        ('u', 'unit, duplex'),
        ('t', 'townhouse'),
    )

    METHOD_CHOICES = (
        ('S', 'property sold'),
        ('SP', 'property sold prior'),
        ('PI', 'property passed in'),
        ('PN', 'sold prior not disclosed'),
        ('NB', 'no bid'),
    )

    seller = models.CharField(max_length=250, blank=True)
    rooms = models.IntegerField(blank=True)
    house_type = models.CharField(max_length=250, choices=HOUSE_CHOICES, blank=True)
    price = models.FloatField(blank=True)
    method = models.CharField(max_length=250, choices=METHOD_CHOICES, blank=True)
    date = models.DateField(blank=True)

    def __str__(self):
        return self.seller

    __tablename__ = 'house'


class Location(models.Model):
    suburb = models.CharField(max_length=250, blank=True)
    address = models.CharField(max_length=250, blank=True)
    postcode = models.CharField(max_length=5, blank=True)
    regionname = models.CharField(max_length=250, blank=True)
    propertycount = models.IntegerField(blank=True)
    distance = models.FloatField(blank=True)
    councilarea = models.CharField(max_length=250, blank=True)
    house = models.ForeignKey(House, on_delete=models.CASCADE)

    def __str__(self):
        return self.suburb

    __tablename__ = 'location'



        
        