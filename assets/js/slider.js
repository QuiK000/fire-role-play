let counter = 0

const swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	centeredSlides: true,
	navigation: {
		nextEl: '.next-slider',
		prevEl: '.prev-slider'
	},
  pagination: {
    el: '.dots-block',
    dynamicBullets: true,
  }
})