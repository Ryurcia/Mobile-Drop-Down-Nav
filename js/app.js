// Icons
const burger = document.querySelector('#buttons');
const exit = document.getElementById('exit');
const menu = document.getElementById('menu');

// Nav
const mobile = document.querySelector('.mobile-nav');

//Add Event Listeners to Hamburger Menu icon
burger.addEventListener('click', (e) => {
    mobile.classList.toggle('activeMobile');
    mobile.classList.toggle('inactiveMobile');

    if(e.target.classList.contains('open')) {
        menu.style.display = "none";
        exit.style.display = "block";
    }else if(e.target.classList.contains('close')) {
        exit.style.display = "none";
        menu.style.display = "block";
    }
})

//Add Event Listeners to Drop Down
mobile.addEventListener('click',(e) => {
    if(e.target.classList.contains('item')) {
        mobile.classList.toggle('activeMobile');
        mobile.classList.toggle('inactiveMobile');

        exit.style.display = "none";
        menu.style.display = "block";
    }
})






