const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const email = document.querySelector("#e-mail");
const subject = document.querySelector("#subject");
const fullNameError = document.querySelector("#fullNameError");
const emailError = document.querySelector("#emailError");
const subjectError = document.querySelector("#subjectError");
const 

function validateContactForm() {
  event.preventDefault();

  if (checkLength(fullName.value, 5) === true) {
    fullNameError.style.display = "none";
  } else fullNameError.style.display = "block";

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else emailError.style.display = "block";

  if (checkLength(subject.value, 15) === true) {
    subjectError.style.display = "none";
  } else subjectError.style.display = "block";

  console.log(fullName.value);
}

form.addEventListener("submit", validateContactForm);

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function enableButton(){
  if (checkLength(fullName.value, 5) === true  && validateEmail(email.value) === true && checkLength(subject.value, 15)){
    button.disabled = false;
  } 
}