//Nav Components
const nav = document.querySelector('.nav');
const openMenu = document.querySelector('.open');
const navItem = document.querySelector('.nav-items');

// Listen for user click
openMenu.addEventListener('click', () => {
    nav.classList.toggle('mobileMenu');
});

// Listen for when Item gets clicked/pressed
navItem.addEventListener('click', (e) => {
    if(e.target.classList.contains('nav-link')) {
        nav.classList.toggle('mobileMenu');
    }
});








