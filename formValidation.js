const form = document.querySelector('.contact-form');
const email = document.querySelector('#email-input');
const error = document.querySelector('.error');
const regEx = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;

function validate(e) {
  const emailVal = email.value;
  const formData = {
    fullName: document.querySelector('#name-input').value,
    emailAddress: document.querySelector('#email-input').value,
    message: document.querySelector('.textarea').value,
  };

  if (emailVal.match(regEx)) {
    localStorage.setItem('DATA', JSON.stringify(formData));
    error.style.display = 'none';
    email.style.border = '1px solid #d0d9d4';
    return true;
  }
  error.style.display = 'block';
  error.innerHTML = 'Email should only contain lowercase letters';
  email.style.border = '1px solid rgb(204, 11, 11)';
  e.preventDefault();
  return false;
}

form.addEventListener('submit', validate);
