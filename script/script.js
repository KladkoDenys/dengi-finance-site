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

	function sliderOurTeam () {

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

//-свайп
		function mobileSwipe () {
						
			const swipeArea = document.querySelector('.our-team__team-card-block-slider');

			let startX,
				startY,
				distX,
				distY,
				threshold = 50;

			swipeArea.addEventListener('touchstart', function(e) {
					var touch = e.touches[0];
						startX = touch.pageX;
						startY = touch.pageY;
			});

			swipeArea.addEventListener('touchmove', function(e) {
					if (e.touches.length > 1) return; // Игнорировать, если касаний больше одного
					var touch = e.touches[0];
					distX = touch.pageX - startX;
					distY = touch.pageY - startY;
			});

			swipeArea.addEventListener('touchend', function(e) {
			if (Math.abs(distX) >= threshold && Math.abs(distY) <= 100) {
				if (distX > 0) {
						slideIndex -= 1;

						if ( slideIndex < 0){
							slideIndex = slides.length - 1;
						}
				
						addBluePoint(slideIndex);
						hideSlides();
						showSlide(slideIndex);
				} else { // Свайп влево
						slideIndex += 1;
					
						if ( slideIndex >= slides.length){
							slideIndex = 0;
						}
				
						addBluePoint(slideIndex);
						hideSlides();
						showSlide(slideIndex);
				}
			}
			});
		}

		mobileSwipe();

	}
	 
	sliderOurTeam();


	//---------------------------
	//--Slider in Comments
	//---------------------------

	function sliderComments () {

		const sliderPointsNavigator = document.querySelectorAll('#comments-slider-points'),
				slidesAll = document.querySelectorAll('.comment-box');

		let slideIndex = 0;

		function hideSlides () {
			slidesAll.forEach((element) => element.style.display = 'none');
			sliderPointsNavigator.forEach((element) => element.classList.remove('comments__slider-points-blue'));
		}

		function showSlide (numberSlide) {
			hideSlides();
			slidesAll[numberSlide].style.display = 'block';
			sliderPointsNavigator[numberSlide].classList.add('comments__slider-points-blue');
		}


		sliderPointsNavigator.forEach((element) => {
			element.addEventListener('click', function() {

				let sliderPointsNavigatorlArray = Array.from(sliderPointsNavigator);
				slideIndex = sliderPointsNavigatorlArray.indexOf(element); 

				showSlide (slideIndex);
			})
		})

		function mobileSwipeComments () {
						
			const swipeArea = document.querySelector('.comments__item-slider-box');

			let startX,
				startY,
				distX,
				distY,
				threshold = 50;

			swipeArea.addEventListener('touchstart', function(e) {
					var touch = e.touches[0];
						startX = touch.pageX;
						startY = touch.pageY;
			});

			swipeArea.addEventListener('touchmove', function(e) {
					if (e.touches.length > 1) return; // Игнорировать, если касаний больше одного
					var touch = e.touches[0];
					distX = touch.pageX - startX;
					distY = touch.pageY - startY;
			});

			swipeArea.addEventListener('touchend', function(e) {
			if (Math.abs(distX) >= threshold && Math.abs(distY) <= 100) {
				if (distX > 0) {
						slideIndex -= 1;

						if ( slideIndex < 0){
							slideIndex = slidesAll.length - 1;
						}
						
						showSlide (slideIndex);
						
				} else { // Свайп влево
						slideIndex += 1;
					
						if ( slideIndex >= slidesAll.length){
							slideIndex = 0;
						}
				
						showSlide (slideIndex);
				}
			}
			});
		}

		mobileSwipeComments();

	}

	sliderComments();


})
