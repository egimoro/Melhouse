from django import forms
from .models import House

class HouseForm(forms.ModelForm):
   

    seller = forms.CharField(label='Seller', widget=forms.TextInput(attrs={'placeholder': 'Seller'}))
    rooms = forms.IntegerField(label='Rooms', min_value=0, widget=forms.NumberInput(attrs={'placeholder': 'Rooms'}) )
    formhse = forms.CharField( widget=forms.HiddenInput(), required=False, label='')
   
    price = forms.FloatField(label='price', min_value=0, widget=forms.NumberInput(attrs={'placeholder': 'Price'}))
   
    date = forms.DateField(label='Date sold', widget=forms.DateInput())
    class Meta:
        model = House
        fields = '__all__'



   
   