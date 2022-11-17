const form = document.querySelector(".contact-form");
const email = document.querySelector("#email-input");
const error = document.querySelector(".error");
const regEx = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;

function validate(e) {
  const emailVal = email.value;
  if (emailVal.match(regEx)) {
    error.style.display = "none";
    email.style.border = "1px solid #d0d9d4";
    return true;
  } else {
    e.preventDefault();
    error.style.display = "block";
    error.textContent =
      "The email address should contain only lowercase letters ";
    return false;
  }
}
form.addEventListener("submit", validate);
