// Doc done scripts
document.addEventListener('DOMContentLoaded', () => {

	document.querySelector('a.btn.icon__btn.burger').addEventListener('click', e => {
		e.preventDefault()
		if (!document.querySelector('.modal__nav').classList.contains('active')) {
			document.querySelector('.modal__nav').classList.add('active')
			document.querySelector('header').classList.add('active')
			document.querySelector('body').classList.add('hidden')
			document.querySelector('a.btn.icon__btn.burger').classList.add('active')
		} else {
			document.querySelector('.modal__nav').classList.remove('active')
			document.querySelector('header').classList.remove('active')
			document.querySelector('body').classList.remove('hidden')
			document.querySelector('a.btn.icon__btn.burger').classList.remove('active')
		}
	})

	document.querySelectorAll('a.modal__nav__link').forEach(element => {
		element.addEventListener('click', e => {
			document.querySelector('.modal__nav').classList.remove('active')
			document.querySelector('header').classList.remove('active')
			document.querySelector('body').classList.remove('hidden')
			document.querySelector('a.btn.icon__btn.burger').classList.remove('active')
		})
	});

	// accordeon
	document.querySelectorAll('.content__item__header').forEach(item => {
		item.addEventListener('click', e => {
			if (e.target.closest('.section__content__item').offsetHeight <= 43) {
				document.querySelectorAll('.section__content__item').forEach(item => {
					item.style.height = '43px'
					item.classList.remove('active')
				})
				e.target.closest('.section__content__item').classList.add('active')
				e.target.closest('.section__content__item').style.height = (53 + e.target.closest('.section__content__item').querySelector('.content__item__body').offsetHeight) + 'px'
			} else {
				e.target.closest('.section__content__item').style.height = '43px'
				e.target.closest('.section__content__item').classList.remove('active')
			}
		})
	})
	
	// Slider open function
	const body = document.querySelector('body')
	function openSliderModal(btn, modal, closeBtn) {
		btn.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()
				modal.classList.add('active')
				body.classList.add('hidden')
				document.querySelector('header').classList.add('modal__active')
			})
		})
	
		closeBtn.addEventListener('click', e => {
			e.preventDefault()
			modal.classList.remove('active')
			body.classList.remove('hidden')
			document.querySelector('header').classList.remove('modal__active')
		})
	}
	
	openSliderModal(document.querySelectorAll('a.btn.view__step'), document.querySelector('.modal__slider'), document.querySelector('.modal__slider .modal__close'))
	openSliderModal(document.querySelectorAll('a.btn.view__gallery'), document.querySelector('.modal__slider'), document.querySelector('.modal__slider .modal__close'))
	openSliderModal(document.querySelectorAll('a.view__img'), document.querySelector('.modal__slider'), document.querySelector('.modal__slider .modal__close'))
	openSliderModal(document.querySelectorAll('.call__btn'), document.querySelector('.modal__call'), document.querySelector('.modal__call .modal__close'))

	// liter change function
	let literFloor = document.querySelector('.liter__info__item.floors h3.liter__info__value')
	let literHome = document.querySelector('.liter__info__item.kv h3.liter__info__value')
	let literSquare = document.querySelector('.liter__info__item.squares h3.liter__info__value')

	document.querySelectorAll('a.liter__btn').forEach(btn => {
		btn.addEventListener('click', e => {
			document.querySelectorAll('a.liter__btn').forEach(btn => { btn.classList.remove('active') })
			e.target.classList.remove('active')
			e.preventDefault()
			switch (e.target.className) {
				case 'liter__btn liter__1':
					literFloor.innerHTML = '20'
					literHome.innerHTML = '56'
					literSquare.innerHTML = '29,4-100,7 м2'
					break;

				case 'liter__btn liter__2':
					literFloor.innerHTML = '21'
					literHome.innerHTML = '56'
					literSquare.innerHTML = '29,4-100,7 м2'
					break;

				case 'liter__btn liter__3':
					literFloor.innerHTML = '22'
					literHome.innerHTML = '56'
					literSquare.innerHTML = '29,4-100,7 м2'
					break;

				case 'liter__btn liter__4':
					literFloor.innerHTML = '23'
					literHome.innerHTML = '56'
					literSquare.innerHTML = '29,4-100,7 м2'
					break;
			
				default:
					break;
			}
		})
	})

	// online video play
	if (document.querySelector('.video') != null) {
		document.querySelector('.video .play').addEventListener('click', e => {
			document.querySelector('.video').classList.add('active')
			document.querySelector('.video iframe').src += "&autoplay=1"
		})
	}

	// Steps block month/year change
	const yearArray = document.querySelectorAll('a.year')
	yearArray.forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault()
			const className = e.target.className
			if (className.includes('year__2023')) {
				yearArray.forEach(year => { year.classList.remove('active') })
				e.target.classList.add('active')
				document.querySelectorAll('.months').forEach(month => { month.classList.remove('active') })
				document.querySelector('.months.year__2023').classList.add('active')
			} else if (className.includes('year__2024')) {
				yearArray.forEach(year => { year.classList.remove('active') })
				e.target.classList.add('active')
				document.querySelectorAll('.months').forEach(month => { month.classList.remove('active') })
				document.querySelector('.months.year__2024').classList.add('active')
			}
		})
	})

	const monthsArray = document.querySelectorAll('a.month')
	monthsArray.forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault()
			monthsArray.forEach(btn => { btn.classList.remove('active')})
			e.target.classList.add('active')
		})
	})

	// add header class when scroll down
	document.addEventListener('scroll', e => {
		if (window.pageYOffset > 100) {
			document.querySelector('header').classList.add('dark')
		} else {
			document.querySelector('header').classList.remove('dark')
		}
	})

	// Smooth scroll when link clicked
	const $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 800);
		return false;
	});

})


