from django.http import HttpResponse,JsonResponse,FileResponse
from django.template import RequestContext, loader
from django.shortcuts import render
from HiModel.models import Test

def index(request):
    return HttpResponse("controller/gui/index")

def tem(request):
    template = loader.get_template('gui/index.html') 
    # js={"name":"lily","age":18}
    js=[1,2,3,4]
    # context = RequestContext(request, {
    #     'list': js,
    # })
    return HttpResponse(template.render({"list":js}))  #render应该传入的是一个dict ，而不是contenxt 实例，文档中有错 

def ren(request,qid=0):
    if qid>0:
        data=Test.objects.filter(id=qid)
    else:
        data=Test.objects.all()    
    # data=Test.objects.all();
    # data=["boy","girl","human"]
    return render(request,"ren.html",{"list":data})

def param(request,pid):
    return HttpResponse(pid)

def p(request,pid):
    return HttpResponse(pid)    


    
