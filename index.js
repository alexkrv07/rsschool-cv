const buttonBurger = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');
buttonBurger.addEventListener('click', () => {
  buttonBurger.classList.toggle('active');
  nav.classList.toggle('active');
  body.classList.toggle('lock');
});