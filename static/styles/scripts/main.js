var CONFIG = {
    root : "../../static/styles/",
      js : "../"
};
requirejs.config({
	baseUrl: CONFIG.root + 'lib',
	paths:{
		jquery:'jquery/dist/jquery',
		bootstrap: 'bootstrap/dist/js/bootstrap.min',
		validate:'jquery-validation/validation',
		datePickerPlugin: 'datepicker/datepicker',
		carousel:'../scripts/components/carousel',
		navigation:'../scripts/components/navigation',
		date :'../scripts/components/datepicker',
		formvalidation:'../scripts/components/formvalidation'
	}, shim: {
        'bootstrap' : { 
            'deps' :['jquery'] 
        }
    }
});
requirejs(['../scripts/app']);