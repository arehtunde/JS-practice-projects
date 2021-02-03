const button = document.querySelector('.wrapper_button');
const body = document.querySelector('body');
const colorText = document.querySelector('.color-text');
const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025', '#f0eded'];

const randomNumber = () => Math.floor(Math.random() * colors.length);

button.addEventListener('click', () => {
  const randomColor = randomNumber();
  body.style.backgroundColor = colors[randomColor];
  colorText.textContent = colors[randomColor];
});
