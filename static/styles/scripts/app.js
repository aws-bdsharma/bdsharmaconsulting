define(function(require) {
	var $ = require('jquery'),
		bootstrap = require('bootstrap'),
		//modal = require('/components/modal'),
		carousel = $('.carousel');
    $(document).ready(function(){
		$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
			$(this).toggleClass('open');
			$('.navigation').toggleClass('show');
		});
	});

	function stickeyheader(){
		var scroll = $(window).scrollTop();

	    if (scroll >= 20) {
	        $("header").addClass("sticky-header");
	    }else{
	    	$("header").removeClass("sticky-header");
	    }
	}

	$(window).scroll(function() {    
	    stickeyheader();
	});

	(function(){
		var url = window.location.pathname,
		    newUrl = url.split('/');
		    $('.navigation ul li a').removeClass("active");
		    if(newUrl[1].length){
		    	$("*[data-nav='"+newUrl[1]+"']").addClass('active');
		    }else{
		    	$("*[data-nav='/']").addClass('active');
		    }
	})();
    
    stickeyheader();



	function setCookie(cname,cvalue,exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    var expires = "expires="+ d.toUTCString();
	    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookies(cname){
		var name = cname + "=";
	    var decodedCookie = decodeURIComponent(document.cookie);
	    var ca = decodedCookie.split(';');
	    for(var i = 0; i <ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length, c.length);
	        }
	    }
	    return "";
	}

	if(carousel.length){
		var carosuel = require('../scripts/components/carousel');
			carousel = new carosuel();
			carousel.slide($(".carousel"));
	}
    (function(){
    	if($('.sub-menu').length){
	    	$('.sub-menu .list-outer').on('click', function(){
	    		$('.sub-menu .list-outer').removeClass('active');
	    		$('.main-home-banner-col-1').find('.item').addClass('hidden');
	    		$('.main-home-banner-col-2').find('.item').addClass('hidden');
			 	var className = $(this).data('tab');
			     	$(this).addClass('active');
			     	//$('.content-box div.data').hide();
			     	$('.'+ className).removeClass('hidden');
			});
	    }
    })();
	

	$(".ok-set-cookie").on("click", function(){
		setCookie('user', 'jhondoe', 10);
		$('.cookies').alert('close');
	});

	
   if(!getCookies('user').length){
   	$('.cookies').removeClass('hidden');   		
   }	
   
   (function(){
   	   $('[data-toggle="popover"]').popover()
	   $('.popover-dismiss').popover({
		  trigger: 'focus'
		})
   })()
            
});




 