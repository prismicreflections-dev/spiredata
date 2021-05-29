$(document).ready(function() {
	// var lastScrollTop = 0;
	// $(window).scroll(function (event) {
	// 	var st = $(this).scrollTop();
	// 	if (st > 0) {
	// 		$(".common-header").addClass("nav-down");
	// 	} else {
	// 		$(".common-header").removeClass("nav-down");
	// 	}
	// 	lastScrollTop = st;
	// });

	// $(".start-refer-btn").click(function(){
	// 	$(".refer-form-sec").addClass("active");
	// });
	// $(".close-sec").click(function(){
	// 	$(".refer-form-sec").removeClass("active");
	// });

	$('.soln-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots: false,
		navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1199:{
				items:2
			}
		}
	});

	$('.companies-carousel').owlCarousel({
		loop:true,
		autoplay: true,
		autoplayTimeout: 4000,
		margin:10,
		nav: false,
		dots: true,
		navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:3
			},
			992:{
				items:3
			},
			1199:{
				items:5
			}
		}
	});
	
	$('.explore-srvc-carousel').owlCarousel({
		loop:true,
		margin: 60,
		stagePadding: 30,
		nav: true,
		dots: true,
		items: 1,
		navText: ["<img src='images/prev_carousel_img.svg' alt='<'>", "<img src='images/next_carousel_img.svg' alt='>'>"],
	});

	$('.explore-srvc-carousel-mob').owlCarousel({
		loop:true,
		margin: 40,
		stagePadding: 20,
		nav: false,
		dots: true,
		items: 1,
	});

	$('.indus-carousel').owlCarousel({
		loop:true,
		autoplay: true,
		autoplayTimeout: 3000,
		margin: 30,
		stagePadding: 0,
		nav: false,
		dots: true,
		items: 1,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1199:{
				items:4
			}
		}
	});

	$('.partner-carousel').owlCarousel({
		loop: false,
		autoplay: false,
		margin: 20,
		stagePadding: 30,
		nav: false,
		dots: false,
		items: 4,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3, dots: true
			},
			1199:{
				items:4
			}
		}
	});

	
});