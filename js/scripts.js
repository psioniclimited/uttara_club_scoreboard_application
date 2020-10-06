var myModule = (function(){
	var elem = $('.dropdown-toggle');
	var elem2 = $('#target');
	
	var dropdown_toggle = function(){
		console.log('Here1');
		elem.dropdown();
	}

	var submit_form = function(){
		console.log('Here2');
		elem2.submit(function(event){
			alert( "Handler for .submit() called." );
  			event.preventDefault();
		});
		
	}



	
	return {
		dropdown_toggle: dropdown_toggle,
		submit_form: submit_form
		
	}
})();

$(document).ready(function(){
	// console.log(myModule);
	myModule.dropdown_toggle();	
	myModule.submit_form();


	
	
});
