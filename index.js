const hamburger = document.querySelector('.hamburger');
const nav_list = document.querySelector('.nav-list');

function toggleMenu() {
  hamburger.classList.toggle('open');
  nav_list.classList.toggle('open');
}
function closeNav(event) {
    if (event.target.classList.contains('nav-link')) {  
        hamburger.classList.remove('open');
        nav_list.classList.remove('open');
    }
}

hamburger.addEventListener('click', toggleMenu);
nav_list.addEventListener('click', toggleMenu);
hamburger.addEventListener('click', closeNav);
nav_list.addEventListener('click', closeNav);