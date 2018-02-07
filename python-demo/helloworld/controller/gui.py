from django.http import HttpResponse,JsonResponse,FileResponse


def index(request):
    return HttpResponse("controller/gui/index")