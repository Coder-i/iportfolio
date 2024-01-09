

from django.shortcuts import render,redirect
from .models import contact
from django.contrib import messages
# Create your views here.


def index(request):
    return render(request,'index.html')


def contactData(request):
    error=''
    if request.method=='POST':
        n=request.POST['name']
        e=request.POST['email']
        s=request.POST['subject']
        m=request.POST['message']
        try:
            cont=contact.objects.create(name=n,email=e,subject=s,message=m)
            cont.save()
            error='no'
        except:
            error='yes'
    # messages.success("Submitted successfully")
    return render(request,'index.html',locals())