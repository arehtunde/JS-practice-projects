const openBtn = document.querySelector('.btn-open');
const closeBtn = document.querySelector('.btn-close');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click', () => {
  modal.showModal();
});

closeBtn.addEventListener('click', () => {
  modal.close();
});
