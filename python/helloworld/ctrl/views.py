from django.shortcuts import render
from django.http import HttpResponse,JsonResponse,FileResponse

# Create your views here.
def cc(request):
    return HttpResponse("ctrl/cc")