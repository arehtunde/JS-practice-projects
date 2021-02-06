/* eslint-disable no-plusplus */
const counter = document.querySelector('.main_counter');
const buttons = document.querySelectorAll('button');
let count = 0;

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const style = e.target.classList;

    if (style.contains('increase')) {
      counter.innerHTML = ++count;
    } else if (style.contains('decrease')) {
      counter.innerHTML = --count;
    } else {
      count = 0;
      counter.innerHTML = count;
    }

    if (count > 0) {
      counter.style.color = 'green';
    } else if (count < 0) {
      counter.style.color = 'red';
    } else {
      counter.style.color = '#011b33';
    }
  });
});
