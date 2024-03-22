var sliderModal = new Swiper(".modal__slider.swiper", {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	navigation: {
		nextEl: ".modal__slider .arrow.next",
		prevEl: ".modal__slider .arrow.prev",
	},
});

var sliderModal = new Swiper(".news__slider.swiper", {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	navigation: {
		nextEl: "section.news .arrow.next",
		prevEl: "section.news .arrow.prev",
	},
});