const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const email = document.querySelector("#e-mail");
const subject = document.querySelector("#subject");
const fullNameError = document.querySelector("#fullNameError");

function validateContactForm() {
  event.preventDefault();

  if (fullName.value.lenght > 0) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }
  console.log("Hello");
}

form.addEventListener("submit", validateContactForm);
