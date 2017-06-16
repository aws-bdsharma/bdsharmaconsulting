define([
	'jquery',
	'validate'	
], function ($, validate) {

	function Class () {

	    function validateForm(ev){
	  
	    	$.validate({
			  form : '#bookng-form',
			  scrollToTopOnError:false,
			  errorMessagePosition :false
			});
         }
		return{
			validateForm:validateForm
		}
	}

	return Class;

});