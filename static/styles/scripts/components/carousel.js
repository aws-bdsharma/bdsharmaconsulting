define([
	'jquery'
], function ($) {

	function Class () {

	    function slide(target){

	    	var imageList = target.find('ul').data('image').split(','),
	    	active = true;
	    	imageList.forEach(function(node){
             var li = $("<li/>"),
                 div = $("<div/>");
                 div.addClass("controls");
                 div.append("<a href='javascript:void(0);' class='left'><i class='fa fa-angle-left' aria-hidden='true'></i></a><a href='javascript:void(0);' class='right'><i class='fa fa-angle-right' aria-hidden='true'></i></a>");
              if(active){
              	li.addClass('active');
              	li.append("<img class='img-responsive'src='"+ node +"'>");
              	target.find('ul').append(li);
              	if(imageList.length >1){
              		target.append(div);
              	}
              	active = false;
              }else{
              	li.append("<img src='"+ node +"'>");
              	target.find('ul').append(li);
              }


	    	});
	    	startSlide(target);
        }

        function startSlide(target){
        	var imageList = target.find('li');
        	var counter = 0;
        	setInterval(function(){
        		$(imageList[counter]).removeClass("active").animate({
						    opacity: 0,
						    display:'none'
						  }, {
						    duration: 3000,
						    specialEasing: {
						      opacity: "linear",
						      display: 'linear'
						    }
						  });
               if(counter == imageList.length-1){
               	 counter=0;
               }else{
               	 counter++;
               }
               $(imageList[counter]).addClass("active").animate({
						    opacity: 1,
						    display:'block'
						  }, {
						    duration: 2000,
						    specialEasing: {
						      opacity: "linear",
						      display:"linear"
						    }
						  });
        	},5000)
        }
		return{
			slide:slide
		}
	}

	return Class;

});