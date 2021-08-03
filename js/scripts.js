const myMenu = document.querySelector('.myMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    myMenu.style.display = 'flex';
    myMenu.style.top = '0';
}

function close() {
    myMenu.style.top = '-110%';
}