from django.urls import path
from .views import (Home, HouseList, HouseAdd, HouseUpdate,
 HouseDetail, HouseDelete, LocHome, LocationList, LocationAdd)

urlpatterns = [
    path('', Home.as_view(), name='home'),
    path('house/', HouseList.as_view(), name='house_list'),
    path('house/<int:id>/', HouseDetail.as_view(), name='house_detail'),
    path('house/add/', HouseAdd.as_view(), name='house_add'),
    path('house/update/<int:id>', HouseUpdate.as_view(), name='house_update'),
    path('house/delete/<int:id>', HouseDelete.as_view(), name='house_delete'),
    path('location/', LocHome.as_view(), name='location_home'),
    path('location/list/', LocationList.as_view(), name='location_list'),
    path('location/add/', LocationAdd.as_view(), name='location_add'),

    

]
