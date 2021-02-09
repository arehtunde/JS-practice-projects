/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import reviews from './reviews.js';

const name = document.querySelector('.details-name');
const job = document.querySelector('.details-job');
const text = document.querySelector('.details-text');
const img = document.querySelector('img');

const prevBtn = document.querySelector('.left');
const nextBtn = document.querySelector('.right');
const randomBtn = document.querySelector('.random');
let current = 0;

window.addEventListener('DOMContentLoaded', () => {
  const loadPerson = reviews[current];

  img.src = loadPerson.img;
  name.textContent = loadPerson.name;
  job.textContent = loadPerson.job;
  text.textContent = loadPerson.text;
});

const showPerson = (id) => {
  const person = reviews[id];
  img.src = person.img;
  name.textContent = person.name;
  job.textContent = person.job;
  text.textContent = person.text;
};

randomBtn.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * reviews.length);
  showPerson(randomNumber);
});

nextBtn.addEventListener('click', () => {
  current++;
  if (current > reviews.length - 1) {
    current = 0;
  }
  showPerson(current);
});

prevBtn.addEventListener('click', () => {
  current--;
  if (current < 0) {
    current = reviews.length - 1;
  }
  showPerson(current);
});
