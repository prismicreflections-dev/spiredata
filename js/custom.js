$(document).ready(function () {
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

  $(".loader").delay('600').fadeOut("5000");

  $(".common-header-wrap").load("include/header.html");
  $(".common-footer-wrap").load("include/footer.html");
  $(".soln-card-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    navText: [
      "<i class='fas fa-long-arrow-alt-left'></i>",
      "<i class='fas fa-long-arrow-alt-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1199: {
        items: 3,
      },
    },
  });

  $(".soln-card-carousel").on(
    "initialized.owl.carousel translate.owl.carousel",
    function (e) {
      idx = e.item.index;
      $(".owl-item .item.blurry").removeClass("blurry");
      $(".owl-item .item")
        .eq(idx + 6)
        .addClass("blurry");
    }
  );

  $(".soln-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
      "<i class='fas fa-long-arrow-alt-left'></i>",
      "<i class='fas fa-long-arrow-alt-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1199: {
        items: 2,
      },
    },
  });

  $(".companies-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    margin: 10,
    nav: false,
    dots: true,
    navText: [
      "<i class='fas fa-long-arrow-alt-left'></i>",
      "<i class='fas fa-long-arrow-alt-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      992: {
        items: 3,
      },
      1199: {
        items: 5,
      },
    },
  });

  $(".explore-srvc-carousel").owlCarousel({
    loop: true,
    margin: 60,
    stagePadding: 30,
    nav: true,
    dots: true,
    items: 1,
    navText: [
      "<img src='images/prev_carousel_img.svg' alt='<'>",
      "<img src='images/next_carousel_img.svg' alt='>'>",
    ],
  });

  $(".explore-srvc-carousel-mob").owlCarousel({
    loop: true,
    margin: 40,
    stagePadding: 20,
    nav: false,
    dots: true,
    items: 1,
  });

  $(".indus-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 30,
    stagePadding: 0,
    nav: false,
    dots: true,
    items: 1,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1199: {
        items: 4,
      },
    },
  });

  $(".partner-carousel").owlCarousel({
    loop: false,
    autoplay: false,
    margin: 20,
    stagePadding: 30,
    nav: false,
    dots: false,
    items: 4,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
        dots: true,
      },
      1199: {
        items: 4,
      },
    },
  });
});

$(document).ready(function () {
  setTimeout(function () {
    // Configure/customize these variables.
    var showChar = 200; // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Show more";
    var lesstext = "Show less";

    $(".read-more-wrap .more").each(function () {
      var content = $(this).html();

      if (content.length > showChar) {
        var c = content.substr(0, showChar);
        var h = content.substr(showChar, content.length - showChar);

        var html =
          c +
          '<span class="moreellipses">' +
          ellipsestext +
          '&nbsp;</span><span class="morecontent"><span>' +
          h +
          '</span>&nbsp;&nbsp;<a href="" class="morelink btn btn-link bttn-link">' +
          moretext +
          "</a></span>";

        $(this).html(html);
      }
    });

    $(".read-more-wrap .morelink").click(function () {
      if ($(this).hasClass("less")) {
        $(this).removeClass("less");
        $(this).html(moretext);
      } else {
        $(this).addClass("less");
        $(this).html(lesstext);
      }
      $(this).parent().prev().toggle();
      $(this).prev().toggle();
      return false;
    });
  }, 1000);

	$('.ourteam-carousel').owlCarousel({
		loop: false,
		autoplay: false,
		margin: 70,
		stagePadding: 30,
		nav: false,
		dots: false,
		items: 3,
		responsive:{
			0:{
				items:1, dots: true, margin: 30,
			},
			768:{
				items:2, dots: true, margin: 30,
			},
			992:{
				items:2, dots: true, margin: 30,
			},
			1199:{
				items:3
			}
		}
	});

	$('.abtsec3-list-carousel').owlCarousel({
		loop: false,
		autoplay: false,
		margin: 20,
		stagePadding: 0,
		nav: false,
		dots: true,
		items: 1,
	});

	$('.recog-carousel').owlCarousel({
		loop: false,
		autoplay: false,
		margin: 10,
		stagePadding: 10,
		nav: false,
		dots: true,
		items: 6,
		responsive:{
			0:{
				items:3, dots: true, margin: 30,
			},
			768:{
				items:4, dots: true, margin: 30,
			},
			992:{
				items:4, dots: true, margin: 30,
			},
			1199:{
				items:6
			}
		}
	});

	$('.hero-list-carousel').owlCarousel({
		loop: false,
		autoplay: false,
		margin: 0,
		stagePadding: 10,
		nav: false,
		dots: true,
		items: 1
	});
	
	$('.srvc-cards-carousel').owlCarousel({
		loop: false,
		autoplay: false,
		margin: 10,
		stagePadding: 10,
		nav: false,
		dots: true,
		items: 1
	});
	
  $('.powerof-ai-carousel').owlCarousel({
		loop: true,
		autoplay: false,
		margin: 25,
		stagePadding: 10,
		nav: true,
		dots: true,
		items: 2,
    navText: [
      "<img src='images/prev_carousel_img.svg' alt='<'>",
      "<img src='images/next_carousel_img.svg' alt='>'>",
    ],
		responsive:{
			0:{
				items:1, dots: true, margin: 30, stagePadding: 10,
			},
			768:{
				items:1, dots: true, margin: 50, stagePadding: 25,
			},
			992:{
				items:2, dots: true, margin: 30,
			},
			1199:{
				items:2
			}
		}
	});

  $('.cards6-carousel').owlCarousel({
		loop: false,
		autoplay: false,
		margin: 10,
		stagePadding: 10,
		nav: false,
		dots: true,
		items: 1
	});

	

	
});
