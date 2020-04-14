
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
document.getElementsByClassName('active_language')[0].addEventListener("click",function(event){
	event.preventDefault()
})
	$(".active_language").on("click",function(e){
		e.stopPropagation()
		$(".language_dropdown li").slideDown(200);
		$(this).addClass("active")
	})
	


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
  infinite:true,
  arrows: true,
  speed:1100,
  autoplaySpeed: 3000,
  prevArrow: $(".home_about_trigger_left"),
    nextArrow: $(".home_about_trigger_right")

});



$(".right_dot").click(function(){
	$(".cd-next").click()
})
$(".left_dot").click(function(){
	$(".cd-prev").click()
})


// 3 section
var interleaveOffset2 = 0.8;

var swiperOptions2 = {
  loop: true,
  speed: 1000,
  grabCursor: true,
  watchSlidesProgress: true,
  mousewheelControl: true,
  keyboardControl: true,
       pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
   // scrollbar: {
   //      el: '.swiper-scrollbar',
   //      hide: true,
   //    },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    progress: function() {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        var slideProgress = swiper.slides[i].progress;
        var innerOffset = swiper.width * interleaveOffset2;
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


  var swiper = new Swiper('.swiper-container.infrastruqture_slider', swiperOptions2);




 // var swiper = new Swiper('.swiper-container.infrastruqture_slider', {

 // 	effect: 'fade',
 //      scrollbar: {
 //        el: '.swiper-scrollbar',
 //        hide: true,
 //      },
 //      pagination: {
 //        el: '.swiper-pagination',
 //        clickable: true,
 //      },
 //    });

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  Infinite:true,
  prevArrow: $(".home_advantege_left_arrow"),
    nextArrow: $(".home_advantege_right_arrow, .slider_next_title, .slider_next_img")
});



	var Sliderlength = $(".home_advantage_left .slider_for_box").not(".slick-cloned").length

	var current1 = 0;
	var current2 = 0;
	var activeSource = Number($(".home_advantage_left .slider-for .slider_for_box.slick-active").not(".slick-cloned").attr("data-slick-index"))

	if (activeSource == 0) {

		current2 = 1
		var img1 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[0].src
		var img2 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[1].src
			$(".slider_img1").attr("src",img1)
			$(".slider_img2").attr("src",img2)

	}
	else if(activeSource == Sliderlength - 1) {

		current2 = 0
		var img1 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[0].src
		var img2 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[1].src
			$(".slider_img1").attr("src",img1)
			$(".slider_img2").attr("src",img2)
	}

	else {

		current2 = activeSource + 1
		var img1 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[0].src
		var img2 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[1].src
			$(".slider_img1").attr("src",img1)
			$(".slider_img2").attr("src",img2)

	}



$(".slider-for").on('afterChange', function(event, slick, currentSlide) {
var activeSource = Number($(".home_advantage_left .slider-for .slider_for_box.slick-active").not(".slick-cloned").attr("data-slick-index"))

	if (activeSource == 0) {
		current2 = 1

		var img1 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[0].src
		var img2 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[1].src
			$(".slider_img1").attr("src",img1)
			$(".slider_img2").attr("src",img2)
	}
	else if(activeSource == Sliderlength - 1) {

		current2 = 0
		var img1 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[0].src
		var img2 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[1].src
			$(".slider_img1").attr("src",img1)
			$(".slider_img2").attr("src",img2)
	}
	else {
		current2 = activeSource + 1
		var img1 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[0].src
		var img2 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[1].src
			$(".slider_img1").attr("src",img1)
			$(".slider_img2").attr("src",img2)
	}

})


$(".home_advantege_right_arrow, .home_advantege_left_arrow, .slider_next_title, .slider_next_img ").click(function(){
	$(".slider_next_img").addClass("active");
	$(".home_advantege_right_arrow, .slider_next_title, .home_advantege_left_arrow, .slider_next_img ").addClass("but_disable");
	

	setTimeout(function(){
		$(".slider_next_img").removeClass("active");
		$(".home_advantege_right_arrow, .home_advantege_left_arrow, .slider_next_title, .slider_next_img ").removeClass("but_disable");
		// $(".home_advantege_right_arrow").removeClass("but_disable");
	},1200)


})

})