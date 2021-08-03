const myTopMenu = document.querySelector('.myMenu');
const weCloseMenu = document.querySelector('.closeMenu');
const weOpenMenu = document.querySelector('.openMenu');

function show() {
    myTopMenu.style.display = 'flex';
    myTopMenu.style.top = '0';
}

function close() {
    myTopMenu.style.top = '-110%';
}

weOpenMenu.addEventListener('click', show);
weCloseMenu.addEventListener('click', close);