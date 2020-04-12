
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
	
	if ($("#home_wrapper").length > 0) {

		$("body").css("overflow","hidden")
	}

//Language	
	$(document).on("click",function(){
		$(".language_dropdown li").slideUp(50);
		$(".active_language").removeClass("active");
	})

	$(".active_language").on("click",function(e){
		e.stopPropagation()
		e.preventDefault()
		$(".language_dropdown li").slideDown(200);
		$(this).addClass("active")
	})
	//


//Header Swipper
var interleaveOffset = 0.5;

var swiperOptions = {
  loop: true,
  speed: 1000,
  grabCursor: true,
  watchSlidesProgress: true,
  mousewheelControl: true,
  keyboardControl: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    progress: function() {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        var slideProgress = swiper.slides[i].progress;
        var innerOffset = swiper.width * interleaveOffset;
        var innerTranslate = slideProgress * innerOffset;
        swiper.slides[i].querySelector(".slide-inner").style.transform =
          "translate3d(" + innerTranslate + "px, 0, 0)";
      }      
    },
    touchStart: function() {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },
    setTransition: function(speed) {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-inner").style.transition =
          speed + "ms";
      }
    }
  }
};

var swiper = new Swiper(".swiper-container.header_swiper", swiperOptions);
	


$('.home_about_slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  speed:1000,

  autoplaySpeed: 3000,
  prevArrow: $(".home_about_trigger_left"),
    nextArrow: $(".home_about_trigger_right")

});



$(".right_dot").click(function(){
	$(".cd-next").click()
})

})