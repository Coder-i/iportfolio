from django.urls import path
from . import views

urlpatterns = [
 
    path('',views.index,name='index'),
    path('contactData/',views.contactData,name='contactData'),
]