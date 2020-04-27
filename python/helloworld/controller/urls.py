from django.conf.urls import url
from django.urls import path #2.0

from . import gui,index

urlpatterns = [
    url(r'^gui/', gui.index),
    url(r'^index/',index.index),
    url(r'^tem/',gui.tem),
    url(r'^ren/(?P<qid>\d{1,4})/$',gui.ren), #1.X的写法，不推荐，但2.0仍兼容
    url(r'^ren/',gui.ren),
    path('param/<int:pid>/',gui.param), #2.0的写法
    url(r'p/(\d{1,4})/',gui.p) #使用正则，一定要在外层加()
]