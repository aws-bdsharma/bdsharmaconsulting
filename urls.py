from django.conf.urls import include, url
from django.contrib import admin

from inventory import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^index/', views.index, name='index'),
    url(r'^about/', views.about, name='about'),
    url(r'^service/', views.service, name='service'),
    url(r'^project/', views.project, name='project'),
    url(r'^ongoing/', views.ongoing, name='ongoing'),
    url(r'^completed/', views.complete, name='complete'),
    url(r'^gallery/', views.gallery, name='gallery'),
    url(r'^contact/', views.contact, name='contact'),
    url(r'^awards/', views.awards, name='awards'),
    url(r'^location/', views.location, name='location'),
    url(r'^management/', views.management, name='management'),
    url(r'^sucess_story/', views.sucess_story, name='sucess_story'),
    url(r'^team/', views.team, name='team'),
    url(r'^interior/', views.interior, name='interior'),
    url(r'^architecture/', views.architecture, name='architecture'),
    url(r'^item/(?P<id>\d+)/', views.item_detail, name='item_detail'),
    url(r'^admin/', include(admin.site.urls)),
]
