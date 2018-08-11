/* https://purecss.io/layouts/tucked-menu-vertical/ */
(() => {
  const menu = document.getElementById('menu'),
    WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';

  const toggleHorizontal = () => {
    [].forEach.call(
      document.getElementById('menu').querySelectorAll('.custom-can-transform'),
      (el) => {
        el.classList.toggle('pure-menu-horizontal');
      }
    );
  };

  const toggleMenu = () => {
    // set timeout so that the panel has a chance to roll up
    // before the menu switches states
    if (menu.classList.contains('open')) {
      setTimeout(toggleHorizontal, 500);
    }
    else {
      toggleHorizontal();
    }
    menu.classList.toggle('open');
    document.getElementById('toggle').classList.toggle('x');
  };

  const closeMenu = () => {
    if (menu.classList.contains('open')) {
      toggleMenu();
    }
  };

  document.getElementById('toggle').addEventListener('click', (e) => {
    toggleMenu();
    e.preventDefault();
  });

  window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
})();
