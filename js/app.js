//Nav Components
const nav = document.querySelector('.nav');
const openMenu = document.querySelector('.open');
const navItem = document.querySelector('.nav-items');

openMenu.addEventListener('click', () => {
    nav.classList.toggle('mobileMenu');
});

navItem.addEventListener('click', (e) => {
    if(e.target.classList.contains('nav-link')) {
        nav.classList.toggle('mobileMenu');
    }
});








