const MOBILE_MENU = document.querySelector('.header__menu-mobile')
const MENU = document.querySelector('.menu')

const CLOSE_MENU = document.querySelector('.close-menu')

MOBILE_MENU.addEventListener('click', () => MENU.classList.add('show'))
CLOSE_MENU.addEventListener('click', () => MENU.classList.remove('show'))