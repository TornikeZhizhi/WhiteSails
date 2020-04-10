
const app = (() => {
	let body;
	let menu;
	let menuItems;
	
	const init = () => {
		body = document.querySelector('body');
		menu = document.querySelector('.menu-icon');
		menuItems = document.querySelectorAll('.nav__list-item');

		applyListeners();
	}
	
	const applyListeners = () => {
		menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
	}
	
	const toggleClass = (element, stringClass) => {
		if(element.classList.contains(stringClass))
			element.classList.remove(stringClass);
		else
			element.classList.add(stringClass);
	}
	
	init();
})();

$(document).ready(function() {
	

//Language	
	$(document).on("click",function(){
		$(".language_dropdown li").slideUp();
		$(".active_language").removeClass("active");
	})

	$(".active_language").on("click",function(e){
		e.stopPropagation()
		e.preventDefault()
		$(".language_dropdown li").slideDown(200);
		$(this).addClass("active")
	})

	
})