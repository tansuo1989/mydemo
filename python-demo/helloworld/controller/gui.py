from django.http import HttpResponse,JsonResponse,FileResponse
from django.template import RequestContext, loader

def index(request):
    return HttpResponse("controller/gui/index")

def tem(request):
    template = loader.get_template('gui/index.html') 
    js={"name":"gui","age":88}
    # context = RequestContext(request, {
    #     'list': js,
    # })
    return HttpResponse(template.render({"list":js}))  #render应该传入的是一个dict ，而不是contenxt 实例，文档中有错 