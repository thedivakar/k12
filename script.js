let menu = document.querySelector('#menu-iocn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Body Building', 'Weight Loss', 'Weight Gain', 'Personal Training', 'Weight Lifting'],
    typeSpeed: 60,
    backspeed: 60,
    backdelay: 1000,
    loop: true,
  });