from django.http import HttpResponse,JsonResponse,FileResponse
from django.conf import settings

def index(request):
    return HttpResponse("I am controller/index")