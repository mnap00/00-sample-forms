/*
 * PureCSS example vertical menu rewritten in ES6
 * https://purecss.io/layouts/tucked-menu-vertical/
 * horizontal toggle removed
 */
(() => {
  const menu = document.getElementById('menu'),
    WINDOW_CHANGE_EVENT = ('onorientationchange' in window)
      ? 'orientationchange'
      : 'resize';

  const toggleMenu = () => {
    menu.classList.toggle('header--open');
    document.getElementById('toggle')
      .classList.toggle('navbar__toggle--x');
  };

  const closeMenu = () => {
    if (menu.classList.contains('header--open')) {
      toggleMenu();
    }
  };

  document.getElementById('toggle').addEventListener('click', (e) => {
    toggleMenu();
    e.preventDefault();
  });

  window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
})();
