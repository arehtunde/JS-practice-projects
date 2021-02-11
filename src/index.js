const open = document.querySelector('.open');
const nav = document.querySelector('.nav');
const icon = document.querySelector('.fas');

const swiss = () => {
  if (icon.classList.contains('fa-bars')) {
    icon.classList.replace('fa-bars', 'fa-times');
  } else {
    icon.classList.replace('fa-times', 'fa-bars');
  }
};

open.addEventListener('click', () => {
  swiss();
  nav.classList.toggle('show');
});
