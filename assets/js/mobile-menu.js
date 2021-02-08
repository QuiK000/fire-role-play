const MOBILE_MENU = document.querySelector('.header__menu-mobile')
const MENU = document.querySelector('.menu')

const CLOSE_MENU = document.querySelector('.close-menu')
const MOBILE_SLIDER = document.querySelector('.mobile-slider')

MOBILE_MENU.addEventListener('click', () => {
  MOBILE_SLIDER.classList.add('unshow')
  MENU.classList.add('show')
})


CLOSE_MENU.addEventListener('click', () => {
  MOBILE_SLIDER.classList.remove('unshow')
  MENU.classList.remove('show')
})