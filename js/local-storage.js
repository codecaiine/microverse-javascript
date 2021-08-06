const local = JSON.parse(localStorage.getItem('user'));
const contactForm = document.getElementById('form-contact');
const hi = document.getElementById('hi');
const btn = document.getElementById('send');
const userName = document.getElementById('fname');
const userEmail = document.getElementById('email');
const userMsg = document.getElementById('msg');

if (local != null) {
  contactForm.style.padding = '10px';
  hi.style.alignItems = 'center';
  hi.style.color = 'green';
  hi.textContent = `Thank you  ${local.name}!`;
  userName.value = `${local.name}`;
  userEmail.value = `${local.email}`;
  userMsg.value = `${local.message}`;
} else {
  btn.onclick = () => {
    const user = {
      id: Date.now(),
      email: document.getElementById('email').value,
      name: document.getElementById('fname').value,
      message: document.getElementById('msg').value,
    };
    localStorage.setItem('user', JSON.stringify(user));
    document.location.reload();
  };
}