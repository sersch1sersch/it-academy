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


const portfolioBtn_winter = document.querySelector('.portfolio_search_form_submit1');
const portfolioImage_winter1 = document.querySelector('.autumn1');
const portfolioImage_winter2 = document.querySelector('.autumn2');
const portfolioImage_winter3 = document.querySelector('.autumn3');
const portfolioImage_winter4 = document.querySelector('.autumn4');
const portfolioImage_winter5 = document.querySelector('.autumn5');
const portfolioImage_winter6 = document.querySelector('.autumn6');
portfolioBtn_winter.addEventListener('click', () => {
  portfolioImage_winter1.src = "assets/img/zima1.jpg";
  portfolioImage_winter2.src = "assets/img/zima2.jpg";
  portfolioImage_winter3.src = "assets/img/zima3.jpg";
  portfolioImage_winter4.src = "assets/img/zima4.jpg";
  portfolioImage_winter5.src = "assets/img/zima5.jpg";
  portfolioImage_winter6.src = "assets/img/zima6.jpg";
  portfolioImage_winter1.alt = "foto winter";
  portfolioImage_winter2.alt = "foto winter";
  portfolioImage_winter3.alt = "foto winter";
  portfolioImage_winter4.alt = "foto winter";
  portfolioImage_winter5.alt = "foto winter";
  portfolioImage_winter6.alt = "foto winter";
  portfolioImage_winter1.title = "foto winter";
  portfolioImage_winter2.title = "foto winter";
  portfolioImage_winter3.title = "foto winter";
  portfolioImage_winter4.title = "foto winter";
  portfolioImage_winter5.title = "foto winter";
  portfolioImage_winter6.title = "foto winter";
});

const portfolioBtn_spring = document.querySelector('.portfolio_search_form_submit2');
const portfolioImage_spring1 = document.querySelector('.autumn1');
const portfolioImage_spring2 = document.querySelector('.autumn2');
const portfolioImage_spring3 = document.querySelector('.autumn3');
const portfolioImage_spring4 = document.querySelector('.autumn4');
const portfolioImage_spring5 = document.querySelector('.autumn5');
const portfolioImage_spring6 = document.querySelector('.autumn6');
portfolioBtn_spring.addEventListener('click', () => {
  portfolioImage_spring1.src = "assets/img/spring1.jpg";
  portfolioImage_spring2.src = "assets/img/spring2.jpg";
  portfolioImage_spring3.src = "assets/img/spring3.jpg";
  portfolioImage_spring4.src = "assets/img/spring4.jpg";
  portfolioImage_spring5.src = "assets/img/spring5.jpg";
  portfolioImage_spring6.src = "assets/img/spring6.jpg";
  portfolioImage_spring1.alt = "foto spring";
  portfolioImage_spring2.alt = "foto spring";
  portfolioImage_spring3.alt = "foto spring";
  portfolioImage_spring4.alt = "foto spring";
  portfolioImage_spring5.alt = "foto spring";
  portfolioImage_spring6.alt = "foto spring";
  portfolioImage_spring1.title = "foto spring";
  portfolioImage_spring2.title = "foto spring";
  portfolioImage_spring3.title = "foto spring";
  portfolioImage_spring4.title = "foto spring";
  portfolioImage_spring5.title = "foto spring";
  portfolioImage_spring6.title = "foto spring";
});

const portfolioBtn_summer = document.querySelector('.portfolio_search_form_submit3');
const portfolioImage_summer1 = document.querySelector('.autumn1');
const portfolioImage_summer2 = document.querySelector('.autumn2');
const portfolioImage_summer3 = document.querySelector('.autumn3');
const portfolioImage_summer4 = document.querySelector('.autumn4');
const portfolioImage_summer5 = document.querySelector('.autumn5');
const portfolioImage_summer6 = document.querySelector('.autumn6');
portfolioBtn_summer.addEventListener('click', () => {
  portfolioImage_summer1.src = "assets/img/summer1.jpg";
  portfolioImage_summer2.src = "assets/img/summer2.jpg";
  portfolioImage_summer3.src = "assets/img/summer3.jpg";
  portfolioImage_summer4.src = "assets/img/summer4.jpg";
  portfolioImage_summer5.src = "assets/img/summer5.jpg";
  portfolioImage_summer6.src = "assets/img/summer6.jpg";
  portfolioImage_summer1.alt = "foto summer";
  portfolioImage_summer2.alt = "foto summer";
  portfolioImage_summer3.alt = "foto summer";
  portfolioImage_summer4.alt = "foto summer";
  portfolioImage_summer5.alt = "foto summer";
  portfolioImage_summer6.alt = "foto summer";
  portfolioImage_summer1.title = "foto summer";
  portfolioImage_summer2.title = "foto summer";
  portfolioImage_summer3.title = "foto summer";
  portfolioImage_summer4.title = "foto summer";
  portfolioImage_summer5.title = "foto summer";
  portfolioImage_summer6.title = "foto summer";
});

const portfolioBtn_autumn = document.querySelector('.portfolio_search_form_submit4');
const portfolioImage_autumn1 = document.querySelector('.autumn1');
const portfolioImage_autumn2 = document.querySelector('.autumn2');
const portfolioImage_autumn3 = document.querySelector('.autumn3');
const portfolioImage_autumn4 = document.querySelector('.autumn4');
const portfolioImage_autumn5 = document.querySelector('.autumn5');
const portfolioImage_autumn6 = document.querySelector('.autumn6');
portfolioBtn_autumn.addEventListener('click', () => {
  portfolioImage_autumn1.src = "assets/img/portfolio1-img.jpg";
  portfolioImage_autumn2.src = "assets/img/portfolio2-img.jpg";
  portfolioImage_autumn3.src = "assets/img/portfolio3-img.jpg";
  portfolioImage_autumn4.src = "assets/img/portfolio4-img.jpg";
  portfolioImage_autumn5.src = "assets/img/portfolio5-img.jpg";
  portfolioImage_autumn6.src = "assets/img/portfolio6-img.jpg";
  portfolioImage_autumn1.alt = "foto autumn";
  portfolioImage_autumn2.alt = "foto autumn";
  portfolioImage_autumn3.alt = "foto autumn";
  portfolioImage_autumn4.alt = "foto autumn";
  portfolioImage_autumn5.alt = "foto autumn";
  portfolioImage_autumn6.alt = "foto autumn";
  portfolioImage_autumn1.title = "foto autumn";
  portfolioImage_autumn2.title = "foto autumn";
  portfolioImage_autumn3.title = "foto autumn";
  portfolioImage_autumn4.title = "foto autumn";
  portfolioImage_autumn5.title = "foto autumn";
  portfolioImage_autumn6.title = "foto autumn";
});

function button_1() {
  portfolioBtn_winter.classList.add('open');
  portfolioBtn_autumn.classList.remove('open');
  portfolioBtn_spring.classList.remove('open');
  portfolioBtn_summer.classList.remove('open');
  portfolioBtn_autumn.style.background = 'black';
}
function button_2() {
  portfolioBtn_winter.classList.remove('open');
  portfolioBtn_autumn.classList.remove('open');
  portfolioBtn_spring.classList.remove('open');
  portfolioBtn_summer.classList.add('open');
  portfolioBtn_autumn.style.background = 'black';
}
function button_3() {
  portfolioBtn_winter.classList.remove('open');
  portfolioBtn_autumn.classList.remove('open');
  portfolioBtn_spring.classList.add('open');
  portfolioBtn_summer.classList.remove('open');
  portfolioBtn_autumn.style.background = 'black';
}
function button_4() {
  portfolioBtn_winter.classList.remove('open');
  portfolioBtn_autumn.classList.add('open');
  portfolioBtn_spring.classList.remove('open');
  portfolioBtn_summer.classList.remove('open');
  portfolioBtn_autumn.style.background = 'rgb(61, 73, 63)';
}
portfolioBtn_winter.addEventListener('click', button_1);
portfolioBtn_summer.addEventListener('click', button_2);
portfolioBtn_spring.addEventListener('click', button_3);
portfolioBtn_autumn.addEventListener('click', button_4);


const section_button_form_item = document.querySelector('.section_button_form_item');
function form_contact() {
  alert('ОТПРАВКА FORM В РАЗРАБОТКЕ');
} 
section_button_form_item.addEventListener('click', form_contact);