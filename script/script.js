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
	//--
	//---------------------------


})