'use strict';

(function () {
  const buttonWrapper = document.querySelector('.button-wrapper');
  const counter = document.querySelector('.counter');
  let activeButton = null;

  function init() {
    counter.textContent = 0;

    for (let i = 1; i <= 5; i++) {
      const el = document.createElement('button');
      el.textContent = `Нажми меня`;
      el.setAttribute(
        'style',
        'width:100px;height:32px; border-radius:32px; border:transparent;'
      );
      buttonWrapper.appendChild(el);
    }
  }

  init();

  if (!buttonWrapper) {
    return;
  }

  [...buttonWrapper.children].forEach((item) => {
    item.addEventListener('click', function () {
      if (activeButton && activeButton !== item) {
        activeButton.textContent = 'Нажми меня';
      }

      item.textContent = 'Нажата!';
      activeButton = item;
      counter.textContent = Number(counter.textContent) + 1;
    });
  });
})();
