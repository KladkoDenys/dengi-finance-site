"use strict";

document.addEventListener('DOMContentLoaded', () => {
	
	//---------------------------
	//--BURGER MENU
	//---------------------------

	function toggleMenuOpenClass (trigger, selectorToAdd) {
		const trigerrBtn = document.querySelector(trigger);

		trigerrBtn.addEventListener('click', (e) => {
			const target = e.target;

			if(target.closest(trigger)){
				document.querySelector(selectorToAdd).classList.toggle('menu__open');
			}
		})
	}
	
	// -Open-close burger menu 930px - 500px
	toggleMenuOpenClass('.headet__burger-btn','.header');

	//-Open burger menu less 500px

	toggleMenuOpenClass('.headet__burger-btn-width-500','.header');

	//-Close burger menu less 500px

	toggleMenuOpenClass('.modal-menu__title-close-trigger','.header');


	//---------------------------
	//--Slider in Our-team
	//---------------------------

	
	const slides = document.querySelectorAll('.team-card'),
			previousSlideButton = document.querySelector('.our-team__team-card-block-slider-prew'),
			nextSlideButton = document.querySelector('.our-team__team-card-block-slider-next'),
			points = document.querySelectorAll('.comments__slider-points-gray-team');

	let slideIndex = 0;

	function hideSlides(){
		slides.forEach((item) => item.style.display = 'none')
	}

	function showSlide (numberSlide) {
		slides[numberSlide].style.display = 'block';
	}

	function addBluePoint (numberPoint) {
		points.forEach((item) => item.classList.remove('comments__slider-points-blue'));
		points[numberPoint].classList.add('comments__slider-points-blue');
	}


	previousSlideButton.addEventListener('click',function(){
		slideIndex -= 1;

		if ( slideIndex < 0){
			slideIndex = slides.length - 1;
		}

		addBluePoint(slideIndex);
		hideSlides();
		showSlide(slideIndex);
	})

	nextSlideButton.addEventListener('click',function(){
		slideIndex += 1;
		
		if ( slideIndex >= slides.length){
			slideIndex = 0;
		}

		addBluePoint(slideIndex);
		hideSlides();
		showSlide(slideIndex);
	})


})