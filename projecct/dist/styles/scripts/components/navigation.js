define([
	'jquery'
	
], function ($) {

	function Class () {
	   var surpriseBlock=$('.surprize-discount-block'),
	       desktopNav=$('.nav');

	   function hideSurprizeBlock(){
          surpriseBlock.slideUp();
       }

       function hideDesktopNav(){
	       	if(desktopNav.hasClass('hidden-mobile')){
	       		desktopNav.animate({}, 2000, function(){
	             	desktopNav.removeClass('hidden-mobile');
	             });
	       	}else{

	       		desktopNav.animate({}, 2000, function(){
	             	desktopNav.addClass('hidden-mobile');
	             });
            }
       }

       function userDetails(){
       	var userLoggedIn = $('.user-loggedIn'),
       	    overlay = $('.overlay');
       	if ($('.user-loggedIn').hasClass('open')){
       		userLoggedIn.removeClass('open');

       	}else{
       		userLoggedIn.addClass('open');
       		overlay.addClass('open');
       	}
         
       }
       

        function hideMobileNav(){
        	var currencyList = $('.currencyList');
	       	if(desktopNav.hasClass('hidden-mobile')){
	       		desktopNav.animate({}, 5000, function(){
	             	desktopNav.removeClass('hidden-mobile');
	             });
	       	}else{

	       		desktopNav.animate({}, 5000, function(){
	             	desktopNav.addClass('hidden-mobile');
	             });
            }
             
	             
         }

         function currencyChange(){
           var currencyList = $('.currencyList'),
       	    Coverlay = $('.Coverlay');
         		if (currencyList.hasClass('open')){
       		        currencyList.removeClass('open');

		       	}else{
		       		currencyList.addClass('open');
		       		Coverlay.addClass('open');
		       	}
         }
         function changeCurrency(event){
         	var 
         	    target=$('.currentOne'),
         	     attrValue = event.data('country');
         	     target.html(attrValue);

         }

         return{
           hideSurprizeBlock:hideSurprizeBlock,
           hideDesktopNav:hideDesktopNav,
           hideMobileNav:hideMobileNav,
           userDetails:userDetails,
           currencyChange:currencyChange,
           changeCurrency : changeCurrency
         }
	}

	return Class;

});