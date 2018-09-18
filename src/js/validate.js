//import {scrollTo} from './goto';


// Validate

(function() {

    const validate = require("validate.js");

	// These are the constraints used to validate the form
	var constraints = {
		email: {
			presence: true,
			email: true
		}
	};


	// Hook up the form so we can prevent it from being posted
	const form = document.getElementsByClassName('js-validate')[0];

	if (form) {

		form.addEventListener('submit', function(ev) {
			handleFormSubmit(form);
			
			ev.returnValue = false;
		});

		// Hook up the inputs to validate on the fly
		var inputs = document.querySelectorAll("input, textarea, select");

		for (var i = 0; i < inputs.length; ++i) {
			inputs.item(i).addEventListener("change", function(ev) {
				var errors = validate(form, constraints) || {};
				showErrorsForInput(this, errors[this.name]);
			});
		}


		function handleFormSubmit(form, input) {

			let errors = validate(form, constraints);

			showErrors(form, errors || {});

			if (!errors) {
				showSuccess(form);
			
			} else {
				
				let window_pos = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
				let target = window_pos + form.getBoundingClientRect().top;

				scrollToo(target, .5, -50);
			}
		}
		
		// Recusively finds the closest parent that has the specified class
		function closestParent(child, className) {
			if (!child || child == document) {
				return null;
			}

			if (child.classList.contains(className)) {
				return child;
			} else {
				return closestParent(child.parentNode, className);
			}
		}

		// Updates the inputs with the validation errors
		function showErrors(form, errors) {
			var arr = form.querySelectorAll("input[name]");
		
			for (var i = 0; i < arr.length; i ++ ) {
				var input = arr[i];
				showErrorsForInput(input, errors && errors[input.name]);
			}
		}


		// Shows the errors for a specific input
		function showErrorsForInput(input, errors) {
			
			// This is the root of the input
			var formGroup = input.parentNode;

			// First we remove any old messages and resets the classes
			resetFormGroup(formGroup);
		
			// If we have errors
			if (errors) {
				// we first mark the group has having errors
				formGroup.classList.add("has-error");
		
			} else {
			// otherwise we simply mark it as success
				formGroup.classList.add("has-success");
			}
		}

		
		


		function resetFormGroup(formGroup) {
			// Remove the success and error classes
			


    			formGroup.classList.remove("has-error");

			

			    formGroup.classList.remove("has-success");


			
			
			/*
var arr = formGroup.querySelectorAll(".help-block.error");
		
			for (var i = 0; i < arr.length; i ++ ) {
				var el = arr[i];

				el.parentNode.removeChild(el);
			}
*/
		}

		function showSuccess(form) {

			console.log('ok');
			//sendData();
		}
	}
})();

