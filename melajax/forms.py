from django import forms
from .models import House, Location

class HouseForm(forms.ModelForm):
   

    seller = forms.CharField(label='Seller', widget=forms.TextInput(attrs={'placeholder': 'Seller'}))
    rooms = forms.IntegerField(label='Rooms', min_value=0, widget=forms.NumberInput(attrs={'placeholder': 'Rooms'}) )
    formhse = forms.CharField( widget=forms.HiddenInput(), required=False, label='')
   
    price = forms.FloatField(label='price', min_value=0, widget=forms.NumberInput(attrs={'placeholder': 'Price'}))
   
    date = forms.DateField(label='Date sold', widget=forms.DateInput())
    class Meta:
        model = House
        fields = '__all__'


class LocationForm(forms.ModelForm):

    suburb = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Suburb'}))
    address = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Address'}))
    postcode = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Postcode'}))
    regionname = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Region Name'}))
    propertycount = forms.IntegerField(min_value=0, widget=forms.NumberInput(attrs={'placeholder': 'Property Count'}))
    distance = forms.FloatField(min_value=0, widget=forms.NumberInput(attrs={'placeholder': 'Distance'}) )
    formloc = forms.CharField(widget=forms.HiddenInput(), required=False, label='')

    class Meta:
        model = Location
        fields = '__all__'
 
   
   