const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const email = document.querySelector("#e-mail");
const subject = document.querySelector("#subject");
const fullNameError = document.querySelector("#fullNameError");
const emailError = document.querySelector("#emailError");
const subjectError = document.querySelector("#subjectError");
const submitButton = document.querySelector(".submit-button");
const message = document.querySelector("#message");
const textError = document.querySelector("#text-error");

submitButton.disabled = true;

fullName.addEventListener("blur", () => CheckFullname());
email.addEventListener("blur", () => CheckEmail());
subject.addEventListener("blur", () => CheckSubject());
message.addEventListener("blur", () => Message());

fullName.addEventListener("input", () => EnableButton());
email.addEventListener("input", () => EnableButton());
subject.addEventListener("input", () => EnableButton());
message.addEventListener("input", () => EnableButton());

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function CheckFullname() {
  if (checkLength(fullName.value, 5)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }
}

function CheckEmail() {
  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
}

function CheckSubject() {
  if (checkLength(subject.value, 15)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
}

function Message() {
  if (checkLength(message.value, 25)) {
    textError.style.display = "none";
  } else {
    textError.style.display = "block";
  }
}

function EnableButton() {
  if (
    checkLength(fullName.value, 5) &&
    validateEmail(email.value) &&
    checkLength(subject.value, 15)
  ) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  CheckFullname();
  CheckEmail();
  CheckSubject();
  Message();
  EnableButton();

  setTimeout(() => {
    form.reset();
    document.querySelector(".confirmation").style.display = "flex";
  }, 1500);
});

//Old code

/*const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const email = document.querySelector("#e-mail");
const subject = document.querySelector("#subject");
const fullNameError = document.querySelector("#fullNameError");
const emailError = document.querySelector("#emailError");
const subjectError = document.querySelector("#subjectError");
const submitButton = document.querySelector(".submit-button");

submitButton.disabled = true;

function validateContactForm(event) {
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

enableButton();

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

function enableButton() {
  if (
    checkLength(fullName.value, 5) === true &&
    validateEmail(email.value) === true &&
    checkLength(subject.value, 15) === true
  ) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

form.addEventListener("submit", validateContactForm);*/
