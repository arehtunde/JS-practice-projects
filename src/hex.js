const button = document.querySelector('.wrapper_button');
const body = document.querySelector('body');
const colorText = document.querySelector('.color-text');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const randomNumber = () => Math.floor(Math.random() * hex.length);

button.addEventListener('click', () => {
  let hexColor = '#';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 6; i++) {
    const randomHex = randomNumber();
    hexColor += hex[randomHex];
  }

  body.style.backgroundColor = hexColor;
  colorText.textContent = hexColor;
});
