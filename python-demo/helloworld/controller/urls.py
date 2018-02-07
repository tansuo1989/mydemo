from django.conf.urls import url

from . import gui,index

urlpatterns = [
    url(r'^gui/', gui.index),
    url(r'^index/',index.index),
    url(r'^tem/',gui.tem)
]