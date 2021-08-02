const toggleButton = document.getElementById('toggle-button');
const navList = document.getElementById('nav-list');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
})