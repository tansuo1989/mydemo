from django.http import HttpResponse
 
from HiModel.models import Test
 
# 数据库操作
def insert(request):
    name=request.GET['name'];
    age=request.GET['age']
    test1 = Test(name=name,age=age)
    test1.save()
    return HttpResponse("<p>数据添加成功！</p>")

def find(request):
    # 变量名如果是 str 可能会出错，因为str是 python 内置的一个函数名 str()
    st=""
    #id=request.GET['id'] if id in request.GET else 1
    if("id" in request.GET):
        id=request.GET['id']
        list=Test.objects.filter(id=id)
    else:
        list=Test.objects.all()
    

    ''' 
    # 通过objects这个模型管理器的all()获得所有数据行，相当于SQL中的SELECT * FROM
    list = Test.objects.all()
        
    # filter相当于SQL中的WHERE，可设置条件过滤结果
    response2 = Test.objects.filter(id=1) 
    
    # 获取单个对象
    response3 = Test.objects.get(id=1) 
    
    # 限制返回的数据 相当于 SQL 中的 OFFSET 0 LIMIT 2;
    Test.objects.order_by('name')[0:2]
    
    #数据排序
    Test.objects.order_by("id")
    
    # 上面的方法可以连锁使用
    Test.objects.filter(name="runoob").order_by("id")
     '''
    if len(list)>0:
        for v in list:
            st += str(v.id)+":"+v.name + "<br/> "
    else:
        st = "empty"
    return HttpResponse("<div class='row'>"+st+"</div>")

def update(request):
    id=request.GET['id']
    name=request.GET['name']
    Test.objects.filter(id=id).update(name=name)

    ''' 
      # 修改其中一个id=1的name字段，再save，相当于SQL中的UPDATE
    test1 = Test.objects.get(id=1)
    test1.name = 'Google'
    test1.save()

    # 修改所有的列
    # Test.objects.all().update(name='Google')
     '''

    return HttpResponse("修改成功")   


def delete(request):
    id=request.GET['id']
    Test.objects.filter(id=id).delete();

    ''' 
    # 删除所有数据
    # Test.objects.all().delete()
     '''

    return HttpResponse("删除成功")     
