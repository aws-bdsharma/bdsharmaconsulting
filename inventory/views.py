from django.shortcuts import render
from django.http import Http404

from inventory.models import Item


def index(request):
	
	return render(request, 'inventory/index.html', {
    	'items':'home',
    })
def service(request):
	
	return render(request, 'inventory/service.html', {
    	'items':'service',
    })
def about(request):
	
	return render(request, 'inventory/about.html', {
    	'items':'about',
    })
def project(request):
	
	return render(request, 'inventory/project.html', {
    	'items':'project',
    })
def complete(request):
	
	return render(request, 'inventory/completed-projects.html', {
    	'items':'complete project',
    }) 
def ongoing(request):
	
	return render(request, 'inventory/ongoing-projects.html', {
    	'items':'ongoing project',
    }) 
def gallery(request):
	
	return render(request, 'inventory/gallery.html', {
    	'items':'gallery project',
    })  
def contact(request):
	
	return render(request, 'inventory/contact.html', {
    	'items':'contact',
    })
def contact(request):
	
	return render(request, 'inventory/contact.html', {
    	'items':'contact',
    }) 
def contact(request):
	
	return render(request, 'inventory/contact.html', {
    	'items':'contact',
    })
def awards(request):
	
	return render(request, 'inventory/awards.html', {
    	'items':'awards',
    })  
def location(request):
	
	return render(request, 'inventory/location.html', {
    	'items':'location',
    })  
def management(request):
	
	return render(request, 'inventory/management.html', {
    	'items':'management',
    })  
def sucess_story(request):
	
	return render(request, 'inventory/sucess-story.html', {
    	'items':'sucess-story',
    }) 
def team(request):
	
	return render(request, 'inventory/team.html', {
    	'items':'team',
    })   

def architecture(request):
	
	return render(request, 'inventory/architecture.html', {
			'item':'architecture',
		}) 

def interior(request):
	
	return render(request, 'inventory/interior.html', {
		'item':'interior',
		})  

def item_detail(request, id):
	try:
		item = Item.objects.get(id=id)
	except Item.DoesNotExist:
		raise Http404('This item does not exist')
	return render(request, 'inventory/item_detail.html', {
		'item': item,
	})





