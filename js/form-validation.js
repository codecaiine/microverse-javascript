const form = document.getElementById('form-contact');
const email = document.getElementById('email');
const error = document.getElementById('email-error');
const textarea = document.getElementById('message');
form.addEventListener('submit', (e) => {
  if (email.value.toLowerCase() !== email.value) {
    e.preventDefault();
    error.style.display = 'block';
    error.style.color = 'red';
    error.textContent = 'Your address email is NOT valid kindly use lowercase';
    textarea.style.marginBottom = '10px';
  }
});