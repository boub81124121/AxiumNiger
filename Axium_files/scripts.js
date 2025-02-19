(function ($) {
  $(document).ready(function () {
    "use strict";

	  
	  $(".cd-horizontal-timeline .events-content li:first-child").addClass("selected");
	  $(".cd-horizontal-timeline .timeline .events-wrapper .events ol li:first-child").addClass("selected");
	  
	  
	  
		
		
		// SANDWICH BUTTON
		$('.sandwich-btn').on('click', function(e) {
			$(this).toggleClass("open")
			$(".sandwich-menu").toggleClass("open")
			$("body").toggleClass("overflow")
			});

		
		// SEARCH
		$('.search-btn').on('click', function(e) {
			$(".search-box").addClass("open")
			});
		
		
		$('.close-btn').on('click', function(e) {
			$(".search-box").removeClass("open")
			});
	  
	  
	  
   
	  // MOBILE MENU
		$('.sandwich-menu .menu-horizontal li a').on('click', function(e) {
			$(this).parent().children('.sandwich-menu .menu-horizontal li .dropdown').slideToggle(300);
			return true;
	  	});
		
		
		
		// SIDE TREE MENU
		$('.solutions .sidebar ul li a').on('click', function(e) {
	  	$(this).parent().children('.solutions .sidebar ul li ul').slideToggle(300);
        return true;
	  	});
		
		
		
		// GO TO TOP
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
    	});

    	$('.scrollup').on('click', function(e) {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
    	});
	  
	  
	  
	  
    // CONTENT SLIDER
    var swiper = new Swiper('.content-slider', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 80,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });


    // SLIDER
		var menu = [];
		jQuery('.swiper-slide').each( function(index){
			menu.push( jQuery(this).find('.slide-inner').attr("data-text") );
		});
		var interleaveOffset = 0.5;
		var swiperOptions = {
			loop: true,
			speed: 1000,
			parallax: true,
				autoplay: {
				delay: 3500,
				disableOnInteraction: false,
			  },
			grabCursor: true,
			watchSlidesProgress: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
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

		var swiper = new Swiper(".swiper-container", swiperOptions);


	
			// CAROUSEL
			var swiper2 = new Swiper('.swiper-carousel', {
				slidesPerView: 3,
				loop: true,
				autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
				spaceBetween: 14,
			   // Navigation arrows
				navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
				breakpoints: {
						1024: {
						  slidesPerView: 3,
						  spaceBetween: 14,
						},
						768: {
						  slidesPerView: 2,
						  spaceBetween: 14,
						},
						640: {
						  slidesPerView: 1,
						  spaceBetween: 14,
						},
						320: {
						  slidesPerView: 1,
						  spaceBetween: 0,
						}
					  }
			});

		// TESTIMONIALS 
		var swiper3 = new Swiper('.swiper-testimonials', {
		  	slidesPerView: 1,
		  	spaceBetween: 0,
			loop: true,
			autoplay: {
        	delay: 2500,
        	disableOnInteraction: false,
      	},
		   // Navigation arrows
	  	navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		}
		});


    // SCROLL DOWN
    $(".bottom-bar .scroll-down a").on('click', function (e) {
      $('html, body').animate({
        scrollTop: $("section").offset().top
      }, 500);
    });


    // PARALLAX
    $.stellar({
      horizontalScrolling: false,
      verticalOffset: 0,
      responsive: true
    });


    

    // DATA BACKGROUND IMAGE
    var pageSection = $("*");
    pageSection.each(function (indx) {
      if ($(this).attr("data-background")) {
        $(this).css("background-image", "url(" + $(this).data("background") + ")");
      }
    });


	  

  });
  // END JQUERY	


  // MASONRY
  function masonry_init() {
    $('.masonry').masonry({
      itemSelector: 'li',
      columnWidth: 'li',
      percentPosition: true
    });
  }

  window.onload = masonry_init;


  // COUNTER
  $(document).scroll(function () {
    $('.odometer').each(function () {
      var parent_section_postion = $(this).closest('section').position();
      var parent_section_top = parent_section_postion.top;
      if ($(document).scrollTop() > parent_section_top - 300) {
        if ($(this).data('status') == 'yes') {
          $(this).html($(this).data('count'));
          $(this).data('status', 'no')
        }
      }
    });
  });
	
	
	
	
	// WOW ANIMATION 
			wow = new WOW(
			{
				animateClass: 'animated',
				offset:       50
			}
			);
			wow.init();
	
	
	



})(jQuery);
