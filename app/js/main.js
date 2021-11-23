
function burger() {
	let burger = document.querySelector('.burger');
	let headerList = document.querySelector('.header-nav__list');

	burger.addEventListener('click', () => {
		headerList.classList.add('visible');
		document.body.style.overflow = 'hidden';
	})

	headerList.addEventListener('click', (e) => {
		if (e.target.classList.contains('header-nav__list') && e.target.classList.contains('visible')) {
			headerList.classList.remove('visible');
			document.body.style.overflow = 'auto';
		}
	})
}

function tabs() {
	let tabButtons = document.querySelectorAll('.tabs-button');
	let tabElements = document.querySelectorAll('.tabs-element');

	tabButtons.forEach((tabButton, index) => {
		tabButton.addEventListener('click', () => {
			tabButtons.forEach(tabButton => tabButton.classList.remove('clicked'));
			tabElements.forEach(tabElement => tabElement.classList.remove('choosen'));
			tabButtons[index].classList.add('clicked');
			tabElements[index].classList.add('choosen');
		})
	})
}

burger();
tabs();

let storiesSlider = new Swiper('.stories-slider', {
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction'
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	on: {
		slideChange: () => {
			let slider = document.querySelector('.stories-slider').swiper;
			let arrowNext = document.querySelector('.arrow-next');
			let arrowPrev = document.querySelector('.arrow-prev');
			if (slider.activeIndex >= 1 && slider.activeIndex < 3) {
				arrowNext.classList.add('black');
				arrowPrev.classList.add('black');
			} else if (slider.activeIndex === 0) {
				arrowPrev.classList.remove('black');
			} else if (slider.activeIndex === 3) {
				arrowNext.classList.remove('black');
			}
		}
	}
});



