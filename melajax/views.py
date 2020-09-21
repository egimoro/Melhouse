from django.http import JsonResponse
from django.views.generic import ListView, View, TemplateView
from .models import House
from .forms import HouseForm
from django.forms.models import model_to_dict
from django.shortcuts import get_object_or_404, render

class Home(View):
    def get(self, request):
        form = HouseForm()
        return render(request, 'melajax/house.html', {'form': form})


class HouseList(View):
    def get(self, request):
        houses = list(House.objects.all().values())
        data = dict()
        data['house_list'] = houses
        return JsonResponse(data)
        

class HouseDetail(View):
    def get(self, request, id):
        house = get_object_or_404(House, id=id)
        data = dict()
        data['house'] = model_to_dict(house)
        return JsonResponse(data)



class HouseAdd(View):
    def post(self, request):
        data = dict()
        if request.is_ajax and request.method == 'POST':
            form = HouseForm(request.POST)
            if form.is_valid():
                house = form.save()
                data['house'] = model_to_dict(house)
                return JsonResponse({'house': data}, status=200)
            else:
                return JsonResponse({'error': form.errors}, status=400)
            
        else:
            return JsonResponse({'error': ''}, status=400)

class HouseUpdate(View):
    def post(self, request, id):
        data = dict()
        if request.is_ajax and request.method == 'POST':
            house = House.objects.get(id=id)
            form = HouseForm(instance=house, data=request.POST)
            if form.is_valid():
                house = form.save()
                data['house'] = model_to_dict(house)
                return JsonResponse({'house': data}, status=200)
            else:
                return JsonResponse({'error': form.errors}, status=400)
            
        else:
            return JsonResponse({'error': ''}, status=400)
