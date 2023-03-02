'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // Меню-бургер
  const iconHeader = document.querySelector('.header__icon-menu');
  const menuHeader = document.querySelector('.header__menu');
  if (iconHeader) {
    iconHeader.addEventListener('click', function (e) {
      // анимация иконки
      iconHeader.classList.toggle('_active');
      menuHeader.classList.toggle('_active');
      // замок на скрол при открытом мобильном меню
      document.body.classList.toggle('_lock');
    });
  }

  document.addEventListener('scroll', () => {
    const headerContent = document.querySelector('.header__content-js');
    const header = document.querySelector('main');
    if (window.scrollY > 0 && headerContent.dataset.fixed !== 'true')
      headerContent.dataset.fixed = 'true';

    if (header.getBoundingClientRect().top === 0) headerContent.dataset.fixed = 'false';
  });
});
