
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



 $('.title-section').click(function() {
    $(this)
      .find($('.down-arrow'))
      .toggleClass('rotate');
      $(this).next('.address-box').slideToggle()
  })




	if ($("#home_wrapper").length == 0 ) {

    $("body").css("overflow-y","scroll");
	}

  if ($("#apartments_select_svg").length > 0) {
      $("body").css("overflow","hidden");
  }
  if ($(".interior_fluid").length > 0) {
      $("body").css("overflow","hidden");
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
$('.interios_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite:true,
  arrows: true,
  dots:true,
  speed:1100,
  autoplaySpeed: 3000,
  prevArrow: $(".interior_slider_left"),
    nextArrow: $(".interior_slider_right")

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

 if ($('.slider-for')) {



 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  draggable:false,
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
		var text1 =$(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".cd_section_1_title").text()
		var img1 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[0].src
		var img2 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[1].src
			$(".slider_next_title h3").text(text1)
			$(".slider_img1").attr("src",img1)
			$(".slider_img2").attr("src",img2)

	}
	// else if(activeSource == Sliderlength - 1) {

	// 	current2 = 0
	// 	var img1 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[0].src
	// 	var img2 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[1].src
	// 		$(".slider_img1").attr("src",img1)
	// 		$(".slider_img2").attr("src",img2)
	// }

	// else {

	// 	current2 = activeSource + 1
	// 	var img1 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[0].src
	// 	var img2 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[1].src
	// 		$(".slider_img1").attr("src",img1)
	// 		$(".slider_img2").attr("src",img2)

	// }



	$(".slider-for").on('afterChange', function(event, slick, currentSlide) {
	var activeSource = Number($(".home_advantage_left .slider-for .slider_for_box.slick-active").not(".slick-cloned").attr("data-slick-index"))

		if (activeSource == 0) {
			current2 = 1
			var text1 =$(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".cd_section_1_title a").text()
			var img1 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[0].src
			var img2 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[1].src
				$(".slider_next_title h3").text(text1)
				$(".slider_img1").attr("src",img1)
				$(".slider_img2").attr("src",img2)
		}
		else if(activeSource == Sliderlength - 1) {

			current2 = 0
				var text1 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".cd_section_1_title a").text()
			var img1 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[0].src
			var img2 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[1].src
				$(".slider_next_title h3").text(text1)
				$(".slider_img1").attr("src",img1)
				$(".slider_img2").attr("src",img2)
		}
		else {
			current2 = activeSource + 1
				var text1 =$(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".cd_section_1_title a").text()
			var img1 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[0].src
			var img2 = $(".home_advantage_left .slider-for").find(`[data-slick-index='${current2}']`).find(".slider_for_img img")[1].src
				$(".slider_next_title h3").text(text1)
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

 }
function listener (event) {

	$(".draggable").removeClass("drag_middle")
	$(".draggable").removeClass("drag_left")
	$(".draggable").removeClass("drag_right")
	
}


interact(".draggable").on('dragstart', listener)
 
  // })
// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
 
 	      startAxis: 'x',
  lockAxis: 'x',
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: false
      })
    ],
    // enable autoScroll
    autoScroll: false,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,

      // call this function on every dragend event
      end (event) {
        var textEl = event.target.querySelector('p')

        textEl && (textEl.textContent =
          'moved a distance of ' +
          (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px')
      }
    }
  })

function dragMoveListener (event) {

	document.getElementsByClassName("draggable")[0].classList.remove("drag_middle")
	document.getElementsByClassName("draggable")[0].classList.remove("drag_right")
	document.getElementsByClassName("draggable")[0].classList.remove("drag_left")
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener



$(".aparment_tab_l").click(function(){

	$(".draggable").removeClass("drag_middle")
	$(".draggable").removeClass("drag_right")
	$(".draggable").addClass("drag_left")
	$(".draggable").attr("data-x","0")


})

$(".aparment_tab_m").click(function(){

	$(".draggable").removeClass("drag_left")
	$(".draggable").removeClass("drag_right")
	$(".draggable").addClass("drag_middle")
		$(".draggable").attr("data-x","-300")
})

$(".aparment_tab_r").click(function(){

	$(".draggable").removeClass("drag_left")
	$(".draggable").removeClass("drag_middle")
	$(".draggable").addClass("drag_right")
	$(".draggable").attr("data-x","-580")

})
$(".aparment_tab").click(function(){

	$(".aparment_tab").removeClass("active")
	$(this).addClass("active")

	$(".home_apartment_right_fluid .st_common").removeClass("active")
	$(".home_apartment_right_fluid").find($(this).attr("data-id")).addClass("active");
})


//Mask
$(".mobile").mask("000 000 000", {placeholder: ''});

//Masorny

if ($(".grid").length > 0) {

  $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: 0,
      horizontalOrder: true,
      gutter: 14.7
    }
  });


  $('[data-fancybox="gallery"]').fancybox({
    // touch:false,
    // wheel:false,
    // hash : false,
    loop:true,
      buttons : [ 

    'zoom',
    'fullScreen',
    'close'
     ],
     transitionEffect : "circular"
    })
}
    
  $('.blog_box').each( function() { $(this).hoverdir(); } );

    var swiper = new Swiper('.about-swiper-container', {
    slidesPerView: 3,
    loop: true,
     speed: 1000,
  grabCursor: true,
  watchSlidesProgress: true,
  mousewheelControl: true,
    navigation: {
    nextEl: ".swiper_about_button-next",
    prevEl: ".swiper_about_button-prev"
  },
  })


//range sider
    $( "#slider-range_left" ).slider({
      range: true,
      min: 0,
      max: 11,
      values: [ 0, 11 ],
      slide: function( event, ui ) {
        // $( "#amount" ).val( "Floor" + ui.values[ 0 ] + " - Floor" + ui.values[ 1 ] );
        $("#slider-range_left").next(".floor_properties_fluid").find(".floor_from").text(ui.values[0])
        $("#slider-range_left").next(".floor_properties_fluid").find(".floor_to").text(ui.values[1])
      }
    });

        $( "#slider-range_right" ).slider({
      range: true,
      min: 0,
      max: 170,
      values: [ 0, 170 ],
      slide: function( event, ui ) {
        // $( "#amount" ).val( "Floor" + ui.values[ 0 ] + " - Floor" + ui.values[ 1 ] );
         $("#slider-range_right").next(".floor_properties_fluid").find(".floor_from").text(ui.values[0])
        $("#slider-range_right").next(".floor_properties_fluid").find(".floor_to").text(ui.values[1])
      }
    });
 
        $(".apartments_filter_button").on("click",function(){

          $(".aparment_filter_fluid").slideToggle()
          $(this).toggleClass("active")
        })


  //
  

//floor tabs

  var floorLength = $(".floor_tabs_container .floor_tabs").length
  var showFloors = 6;
  var floorHeight = 50;
  var hiddenFloors = floorLength - showFloors -1;
  var valueDown = 0;
  var valueUp = 0;


  $(".floor_arrow.down").on("click",function(){
        console.log(valueUp,valueDown)
       if (valueUp >= 50) {
       valueUp = valueUp - 50
       valueDown  = valueUp 
       $(".floor_tabs").css("transform","translateY("+valueUp +"px)");
     }

  })

  $(".floor_arrow.up").on("click",function(){
    
     if (floorHeight * hiddenFloors >= valueUp) {
      valueDown = valueDown + 50;
      valueUp = valueDown
      $(".floor_tabs").css("transform","translateY("+valueDown +"px)");
       } 
 
  })


  //about js



     var myFullpage = new fullpage('#fullpage', {
        anchors: ['section0', 'section1', 'section2', 'section3','section4','section5','section6','section7','section8','section9','section10','section11','section12'],

        scrollOverflow: true
    });

    $("#fullpage .section").each(function(index,el) {
      $(".about_menu").append(`<li data-menuanchor="section${index}"><a href="#section${index}"><span class="dot_title">Visa Free</span></a></li> `)
     
    })



//svg js

 $('.common_building').on('click','.st0,.st_common',function(){
      window.location = $(this).data('url');
  });


 $(".building_a .st0").each(function(index,el){

  $(this).mouseenter(function(e,ind){

       $(".floor_title .floor_number").text(index + 2);
      $(".floor_title a").attr("href",$(this).data("url"));
      
    if (index == 0) {

       $(".floor_title .floor_end").text("nd");
    }else if(index == 1){

       $(".floor_title .floor_end").text("rd");

    }else if (index >1) {
      $(".floor_title .floor_end").text("th");

    }
   

  })

 })

})
