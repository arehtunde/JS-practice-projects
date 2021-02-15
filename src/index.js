const sections = document.querySelectorAll('.section');

sections.forEach((section) => {
  const btn = section.querySelector('.question-btn');
  const text = section.querySelector('.question-text');
  const icon = section.querySelector('.fas');

  btn.addEventListener('click', () => {
    if (icon.classList.contains('fa-plus')) {
      icon.style.transform = 'rotate(180deg)';
      icon.classList.replace('fa-plus', 'fa-minus');
      text.style.display = 'block';
    } else {
      icon.style.transform = 'rotate(-180deg)';
      icon.classList.replace('fa-minus', 'fa-plus');
      text.style.display = 'none';
    }
  });
});
