from django.urls import path
from .views import Home, HouseList, HouseAdd, HouseUpdate, HouseDetail

urlpatterns = [
    path('', Home.as_view(), name='home'),
    path('house/', HouseList.as_view(), name='house_list'),
    path('house/<int:id>/', HouseDetail.as_view(), name='house_detail'),
    path('house/add/', HouseAdd.as_view(), name='house_add'),
    path('house/update/<int:id>', HouseUpdate.as_view(), name='house_update'),
    

]
