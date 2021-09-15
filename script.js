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
  menuLink.forEach(link => {
    link.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
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

console.log(`
*************************************************

"+" - вёрстка валидная +10

"+" - вёрстка семантическая +20

"+" - для оформления СV используются css-стили +10

"+" - контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10

"+" - вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10

"+" - есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. Внешний вид адаптивного меню можно скопировать с макета музея +10

"+" - на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10

"+" - контакты для связи и перечень навыков оформлены в виде списка ul > li +10

"+" - CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10

"+" - CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js +10

"+" - CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10

"+" - CV выполнено на английском языке +10

"+" - выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10

"+" - есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке (например, в документе Google Docs). +10

"+" - дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10

*************************************************
`);
