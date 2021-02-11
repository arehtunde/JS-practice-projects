const open = document.querySelector('.open');
const nav = document.querySelector('.nav');
const show = document.querySelector('.show');

open.addEventListener('click', () => {
  nav.classList.toggle('show');
});
