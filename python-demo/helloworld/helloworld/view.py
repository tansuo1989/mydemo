from django.http import HttpResponse,JsonResponse,FileResponse
from . import mysql
from django.conf import settings
 
def hello(request):
    return HttpResponse("Hello world ! ")


def hi(request):
    return HttpResponse(request.path)

def myint(request):
    st="hi";
    res=st+str(99)

    return HttpResponse(res)

def json(request):
    json={"id":99,"name":"gui"}
    hi=9
    res=""
    if hi>9:
        res="> 9"
    else:
        for key in json:
            res+=key+":"+str(json[key])+"<br/>"

    return HttpResponse(res)

def res(request):
    # return JsonResponse(js(),safe=False)
    return FileResponse(open(settings.BASE_DIR+"/static/girl.jpg","rb"), content_type='image/jpeg');


def li():
    list=[1,2,3,4,5]
    return list

def js():
    return {"name":"gui","age":99}

# 路由分组，使用include
def info(request):
    return HttpResponse("I am user/info")

def psd(request):
    return HttpResponse("I am user/psd")        



  
