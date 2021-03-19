(function ($) {
	"use strict";

	/*-------------------------------------*/
	/* Top Under Menubar Slider Active
	/*--------------------------------------*/
	$('.slideshow').owlCarousel({
		autoplay: true,
		loop: true,
		nav: true,
		dots: false,
		items: 1,
	});


	/*-------------------------------------*/
	/* Sale Slider Active
	/*--------------------------------------*/
	$('.product-slider').owlCarousel({
		autoplay: false,
		loop: true,
		nav: true,
		dots: false,
		margin: 10,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			},
			1200: {
				items: 5
			}
		}
	});


	/*-------------------------------------*/
	/* Sale Slider Active
	/*--------------------------------------*/
	$('.brand-slider').owlCarousel({
		autoplay: true,
		loop: true,
		nav: false,
		dots: false,
		margin: 10,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			},
			1200: {
				items: 5
			}
		}
	});


	/*-------------------------------------*/
	/* Related Product
	/*--------------------------------------*/
	$('.single-product-related-item').owlCarousel({
		autoplay: true,
		loop: true,
		nav: true,
		dots: false,
		margin: 10,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			},
			1200: {
				items: 5
			}
		}
	});


	/*-------------------------------------*/
	/* Category Product Ad Slider Active
	/*--------------------------------------*/
	$('.category-product-ad-slider').owlCarousel({
		autoplay: true,
		loop: true,
		nav: true,
		dots: false,
		items: 1,
		slideSpeed: 1000
	});


	/*-------------------------------------*/
	/* Category Product Slider Active
	/*--------------------------------------*/
	$('.category-product-slider').owlCarousel({
		autoplay: false,
		loop: true,
		nav: true,
		dots: false,
		margin: 10,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 3
			}
		}
	});


	/*-------------------------------------*/
	/* Single Store offer Slider Active
	/*--------------------------------------*/
	$('.single-store-slider').owlCarousel({
		autoplay: true,
		loop: true,
		nav: true,
		dots: true,
		items: 1,
	});

	/*-------------------------------------*/
	/* Tooltip Active
	/*--------------------------------------*/
	$('[data-toggle="tooltip"]').tooltip();


	/*-------------------------------------*/
	/* Site Top ad Close
	/*--------------------------------------*/
	$(".homepage-ad-close-btn").click(function () {
		$(".homepage-ad").slideUp(500)
	});

	/*-------------------------------------*/
	/* Site Top ad Close
	/*--------------------------------------*/
	$(".cookie-info-close").click(function () {
		$(".cookie-info").fadeOut(500)
	});


	/*-------------------------------------*/
	/* Cart Sidebar Active
	/*--------------------------------------*/
	$(".cart-trigger").click(function () {
		$(".off-canvas-menu, .off-canvas-overlay").addClass("off-canvas-triggered")
	});
	$(".cart-close-btn, .off-canvas-overlay").click(function () {
		$(".off-canvas-menu, .off-canvas-overlay").removeClass("off-canvas-triggered")
	});

	/*-------------------------------------*/
	/* Cart Plus Minus Button
	/*--------------------------------------*/
	var CartPlusMinus = $(".cart-plus-minus");
	CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
	CartPlusMinus.append('<div class="inc qtybutton">+</div>');
	$(".qtybutton").on("click", function () {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() === "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 1) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 1;
			}
		}
		$button.parent().find("input").val(newVal);
	});

	/*-------------------------------------*/
	/* Shipping Address
	/*--------------------------------------*/
	$('.shopping-cart-personal-address input[type="checkbox"]').click(function () {
		if ($('.shopping-cart-personal-address input[type="checkbox"]').prop("checked") == true) {
			$('.shopping-cart-address input[type="text"] , .shopping-cart-address input[type="tel"]').prop("disabled", true);
		} else {
			$('.shopping-cart-address input[type="text"] , .shopping-cart-address input[type="tel"]').prop("disabled", false);
		}
	});

	/*-------------------------------------*/
	/* Order submit terms & condition check & Register
	/*--------------------------------------*/
	$('.checkout-ammount input[type="submit"], .register-form input[type="submit"]').prop("disabled", true);
	$('.agrement input[type="checkbox"], .register-form input[type="checkbox"]').click(function () {
		if ($(this).prop("checked") == false) {
			$('.checkout-ammount input[type="submit"], .register-form input[type="submit"]').prop("disabled", true);
		} else {
			$('.checkout-ammount input[type="submit"], .register-form input[type="submit"]').prop("disabled", false);
		}
	});


	/*-------------------------------------*/
	/* Mobile Menu Active
	/*--------------------------------------*/
	$(function () {
		$('#navigation').slicknav({
			label: "",
			closedSymbol: "+",
			openedSymbol: "-",
			prependTo: ".mobile-menu"
		});
	});

	/*-------------------------------------*/
	/* Lazyload Active
	/*--------------------------------------*/
	$(function () {
		$('img.lazy').lazy();
	});


	/*-------------------------------------*/
	/* Product zoom Active
	/*--------------------------------------*/
	


	/*-------------------------------------*/
	/* Back to top Active
	/*--------------------------------------*/
	$(window).on('scroll', function () {
		if ($(window).scrollTop() >= 200) {
			$('.back-to-top').fadeIn(100);
		} else {
			$('.back-to-top').fadeOut(500);
		}
	});

	$('.back-to-top').on('click', function () {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});

})(jQuery);
