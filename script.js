'use strict';

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    //  запрещаем прокрутку для бади в режиме меню
    document.body.classList.toggle('_lock');

    //  включаем/выключаем класс _active иконки, чтобы она трансформировалась в клестик
    iconMenu.classList.toggle('_active');

    //  включаем/выключаем класс _active для появления меню
    menuBody.classList.toggle('_active');
  });
}

// Прокрутка при клике на ссылки в нав (data-goto="")
const menuLink = document.querySelectorAll('.list__item[data-goto]');

if (menuLink.length > 0) {
  menuLink.forEach((link) => {
    link.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        scrollY -
        document.querySelector('header').offsetHeight -
        20; // 20 зазор в плюсе

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });
      e.preventDefault();
    }
  }
}
