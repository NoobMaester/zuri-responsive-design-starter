const mainMenu = document.getElementById('main-menu');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

openMenu.addEventListener('click', show);

closeMenu.addEventListener('click', hide);

function show () {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function hide(){
    mainMenu.style.top = '-100%';
}