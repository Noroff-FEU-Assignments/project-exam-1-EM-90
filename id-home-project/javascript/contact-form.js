const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const email = document.querySelector("#e-mail");
const subject = document.querySelector("#subject");
const fullNameError = document.querySelector("#fullNameError");
const emailError = document.querySelector("#emailError");
const subjectError = document.querySelector("#subjectError");

function validateContactForm() {
  event.preventDefault();

  if (fullName.value.trim().length > 0) {
    fullNameError.style.display = "none";
  } else fullNameError.style.display = "block";

  if (email.value.trim().length > 0) {
    emailError.style.display = "none";
  } else emailError.style.display = "block";

  if (subject.value.length > 5) {
    subjectError.style.display = "none";
  } else subjectError.style.display = "block";

  console.log(fullName.value);
}

form.addEventListener("submit", validateContactForm);
