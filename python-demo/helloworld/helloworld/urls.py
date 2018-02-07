"""helloworld URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
''' from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
] '''

from django.conf.urls import url,include
from django.contrib import admin
 
from . import view,mysql
from ctrl import views
from controller import index
from controller import gui

# 包涵路由
other=[
   url(r'^info/',view.info),
   url(r'^psd/',view.psd),
] 

urlpatterns = [
    url(r'^$', view.hello),
    url(r'^hi',view.hi),
    url(r'^int/',view.myint),
    url(r'^json/',view.json),
    url(r'^res/',view.res),
    url(r'^admin/', admin.site.urls),
    url(r'^insert/',mysql.testdb),
    url(r'^find/',mysql.find),
    url(r'^update/',mysql.update),
    url(r'^del/',mysql.delete),
    url(r'^user/',include(other)),
    url(r'^cc/',views.cc),
    url(r'^index/',index.index),
    url(r'^gui/',gui.index),
    url(r'^controller/',include('controller.urls')), #使用子路由
]


