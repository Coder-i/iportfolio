from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import contact
from django.contrib import messages

def index(request):
    return render(request, 'index.html')

def contactData(request):
    error = ''
    if request.method == 'POST':
        n = request.POST['name']
        e = request.POST['email']
        s = request.POST['subject']
        m = request.POST['message']
        try:
            cont = contact.objects.create(name=n, email=e, subject=s, message=m)
            cont.save()
            error = 'no'
        except:
            error = 'yes'
    return render(request, 'index.html', {'error': error})

def switch_theme(request):
    if request.method == 'POST':
        theme = request.POST.get('theme')
        request.session['theme'] = theme
        return JsonResponse({'status': 'success'})
    return JsonResponse({'status': 'error'})