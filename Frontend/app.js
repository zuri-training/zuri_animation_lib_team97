// Contact Us Validation form

// const form = document.querySelector("form[name='contact-form']");
// const nameInput = document.querySelector("input[name='name']");
// const emailInput = document.querySelector("input[name='email']");
// const phoneInput = document.querySelector("input[name='phone']");
// const messageInput = document.querySelector("textarea[name='message']");















const form = document.querySelector("form[name='contact-form']");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const phoneInput = document.querySelector("input[name='phone']");
const messageInput = document.querySelector("textarea[name='message']");

nameInput.isValid = () => !!nameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
phoneInput.isValid = () => isValidPhone(phoneInput.value);
messageInput.isValid = () => !!messageInput.value;

const inputFields = [nameInput, emailInput, phoneInput, messageInput];

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
  console.log("we are here");
  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide");
    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {
    // TODO: DO AJAX REQUEST
  }
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));



// Ends here






























// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// form.addEventListener('submit', e => {
// 	e.preventDefault();
	
// 	checkInputs();
// });

// function checkInputs() {
// 	// trim to remove the whitespaces
// 	const usernameValue = username.value.trim();
// 	const emailValue = email.value.trim();
// 	const passwordValue = password.value.trim();
// 	const password2Value = password2.value.trim();
	
// 	if(usernameValue === '') {
// 		setErrorFor(username, 'Username cannot be blank');
// 	} else {
// 		setSuccessFor(username);
// 	}
	
// 	if(emailValue === '') {
// 		setErrorFor(email, 'Email cannot be blank');
// 	} else if (!isEmail(emailValue)) {
// 		setErrorFor(email, 'Not a valid email');
// 	} else {
// 		setSuccessFor(email);
// 	}
	
// 	if(passwordValue === '') {
// 		setErrorFor(password, 'Password cannot be blank');
// 	} else {
// 		setSuccessFor(password);
// 	}
	
// 	if(password2Value === '') {
// 		setErrorFor(password2, 'Password2 cannot be blank');
// 	} else if(passwordValue !== password2Value) {
// 		setErrorFor(password2, 'Passwords does not match');
// 	} else{
// 		setSuccessFor(password2);
// 	}
// }

// function setErrorFor(input, message) {
// 	const formControl = input.parentElement;
// 	const small = formControl.querySelector('small');
// 	formControl.className = 'form-control error';
// 	small.innerText = message;
// }

// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'form-control success';
// }
	
// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }













// // SOCIAL PANEL JS
// const floating_btn = document.querySelector('.floating-btn');
// const close_btn = document.querySelector('.close-btn');
// const social_panel_container = document.querySelector('.social-panel-container');

// floating_btn.addEventListener('click', () => {
// 	social_panel_container.classList.toggle('visible')
// });

// close_btn.addEventListener('click', () => {
// 	social_panel_container.classList.remove('visible')
// });












// form
// function CustomValidation() {
// 	this.invalidities = [];
// 	this.validityChecks = [];
// }

// CustomValidation.prototype = {
// 	addInvalidity: function(message) {
// 		this.invalidities.push(message);
// 	},
// 	getInvalidities: function() {
// 		return this.invalidities.join('. \n');
// 	},
// 	checkValidity: function(input) {
// 		for ( var i = 0; i < this.validityChecks.length; i++ ) {

// 			var isInvalid = this.validityChecks[i].isInvalid(input);
// 			if (isInvalid) {
// 				this.addInvalidity(this.validityChecks[i].invalidityMessage);
// 			} 

// 			var requirementElement = this.validityChecks[i].element;
// 			if (requirementElement) {
// 				if (isInvalid) {
// 					requirementElement.classList.add('invalid');
// 					requirementElement.classList.remove('valid');
// 				} else {
// 					requirementElement.classList.remove('invalid');
// 					requirementElement.classList.add('valid');
// 				}

// 			} // end if requirementElement
// 		} // end for
// 	}
// };



// /* ----------------------------

// 	Validity Checks

// 	The arrays of validity checks for each input
// 	Comprised of three things
// 		1. isInvalid() - the function to determine if the input fulfills a particular requirement
// 		2. invalidityMessage - the error message to display if the field is invalid
// 		3. element - The element that states the requirement
	
// ---------------------------- */

// var usernameValidityChecks = [
// 	{
// 		isInvalid: function(input) {
// 			return input.value.length < 3;
// 		},
// 		invalidityMessage: 'This input needs to be at least 3 characters',
// 		element: document.querySelector('label[for="username"] .input-requirements li:nth-child(1)')
// 	},
// 	{
// 		isInvalid: function(input) {
// 			var illegalCharacters = input.value.match(/[^a-zA-Z0-9]/g);
// 			return illegalCharacters ? true : false;
// 		},
// 		invalidityMessage: 'Only letters and numbers are allowed',
// 		element: document.querySelector('label[for="username"] .input-requirements li:nth-child(2)')
// 	}
// ];

// var passwordValidityChecks = [
// 	{
// 		isInvalid: function(input) {
// 			return input.value.length < 8 | input.value.length > 100;
// 		},
// 		invalidityMessage: 'This input needs to be between 8 and 100 characters',
// 		element: document.querySelector('label[for="password"] .input-requirements li:nth-child(1)')
// 	},
// 	{
// 		isInvalid: function(input) {
// 			return !input.value.match(/[0-9]/g);
// 		},
// 		invalidityMessage: 'At least 1 number is required',
// 		element: document.querySelector('label[for="password"] .input-requirements li:nth-child(2)')
// 	},
// 	{
// 		isInvalid: function(input) {
// 			return !input.value.match(/[a-z]/g);
// 		},
// 		invalidityMessage: 'At least 1 lowercase letter is required',
// 		element: document.querySelector('label[for="password"] .input-requirements li:nth-child(3)')
// 	},
// 	{
// 		isInvalid: function(input) {
// 			return !input.value.match(/[A-Z]/g);
// 		},
// 		invalidityMessage: 'At least 1 uppercase letter is required',
// 		element: document.querySelector('label[for="password"] .input-requirements li:nth-child(4)')
// 	},
// 	{
// 		isInvalid: function(input) {
// 			return !input.value.match(/[\!\@\#\$\%\^\&\*]/g);
// 		},
// 		invalidityMessage: 'You need one of the required special characters',
// 		element: document.querySelector('label[for="password"] .input-requirements li:nth-child(5)')
// 	}
// ];

// var passwordRepeatValidityChecks = [
// 	{
// 		isInvalid: function() {
// 			return passwordRepeatInput.value != passwordInput.value;
// 		},
// 		invalidityMessage: 'This password needs to match the first one'
// 	}
// ];



// /* ----------------------------

// 	Check this input

// 	Function to check this particular input
// 	If input is invalid, use setCustomValidity() to pass a message to be displayed

// ---------------------------- */

// function checkInput(input) {

// 	input.CustomValidation.invalidities = [];
// 	input.CustomValidation.checkValidity(input);

// 	if ( input.CustomValidation.invalidities.length == 0 && input.value != '' ) {
// 		input.setCustomValidity('');
// 	} else {
// 		var message = input.CustomValidation.getInvalidities();
// 		input.setCustomValidity(message);
// 	}
// }



// /* ----------------------------

// 	Setup CustomValidation

// 	Setup the CustomValidation prototype for each input
// 	Also sets which array of validity checks to use for that input

// ---------------------------- */

// var usernameInput = document.getElementById('username');
// var passwordInput = document.getElementById('password');
// var passwordRepeatInput = document.getElementById('password_repeat');

// usernameInput.CustomValidation = new CustomValidation();
// usernameInput.CustomValidation.validityChecks = usernameValidityChecks;

// passwordInput.CustomValidation = new CustomValidation();
// passwordInput.CustomValidation.validityChecks = passwordValidityChecks;

// passwordRepeatInput.CustomValidation = new CustomValidation();
// passwordRepeatInput.CustomValidation.validityChecks = passwordRepeatValidityChecks;




// /* ----------------------------

// 	Event Listeners

// ---------------------------- */

// var inputs = document.querySelectorAll('input:not([type="submit"])');
// var submit = document.querySelector('input[type="submit"');

// for (var i = 0; i < inputs.length; i++) {
// 	inputs[i].addEventListener('keyup', function() {
// 		checkInput(this);
// 	});
// }

// submit.addEventListener('click', function() {
// 	for (var i = 0; i < inputs.length; i++) {
// 		checkInput(inputs[i]);
// 	}
// });