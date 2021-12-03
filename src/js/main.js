const mainBanner = () => {
	var swiper = new Swiper('.home-banner .swiper-container', {
		pagination: {
			el: ".swiper-pagination",
			paginationClickable: true,
			clickable: true
		},
		observer: true,
		observeParents: true,
		parallax: true,
		speed: 2000,
		effect: "fade",
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		fadeEffect: {
			crossFade: true,
		},
		loop: true
	});

	var swiper = new Swiper(".swiper-card .swiper-container", {
		speed: 750,
		observer: true,
		observeParents: true,
		lazy: true,
		breakpointsInverse: true,
		loop: false,
		navigation: {
			nextEl: ".swiper-card .swiper-button-next",
			prevEl: ".swiper-card .swiper-button-prev",
			clickable: true,

		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 10,
			},

		},
	});
	$(".slide-card_mobile .swiper-container").each(function (index, element) {
		var $this = $(this);
		$this.addClass("card-" + index);
		$this.parent().find(".swiper-button-prev").addClass("swiper-button-prev-" + index);
		$this.parent().find(".swiper-button-next").addClass("swiper-button-next-" + index);
		var swiper = new Swiper(".card-" + index, {
			speed: 750,
			observer: true,
			observeParents: true,
			lazy: true,
			breakpointsInverse: true,
			spaceBetween: 16,
			centeredSlides: true,
			roundLengths: true,
			loop: true,
			loopAdditionalSlides: 30,
			navigation: {
				nextEl: ".swiper-button-next-" + index,
				prevEl: ".swiper-button-prev-" + index,
				clickable: true,

			},
			breakpoints: {
				375: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2.5,
				}
			},

		});
	});
	var swiper = new Swiper(".slide-single .swiper-container", {
		speed: 750,
		observer: true,
		observeParents: true,
		lazy: true,
		breakpointsInverse: true,
		loop: false,
		navigation: {
			nextEl: ".slide-single .swiper-button-next",
			prevEl: ".slide-single .swiper-button-prev"
		},
		breakpoints: {
			375: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			575: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 10,
			},
			1280: {
				slidesPerView: 5,
				spaceBetween: 10,
			},
		},
	});
	var swiper = new Swiper('.comparny-image .swiper-container', {
		pagination: {
			el: ".swiper-pagination",
			paginationClickable: true,
			clickable: true
		},
		observer: true,
		observeParents: true,
		parallax: true,
		speed: 2000,
		loop: true
	});
	var swiper = new Swiper('.banner-innerhome .big-banner', {
		pagination: {
			el: ".banner-innerhome .big-banner .swiper-pagination",
			paginationClickable: true,
			clickable: true
		},
		navigation: {
			nextEl: ".banner-innerhome .big-banner .swiper-button-next",
			prevEl: ".banner-innerhome .big-banner .swiper-button-prev"
		},
		observer: true,
		observeParents: true,
		parallax: true,
		speed: 2000,
		loop: true
	});
	var swiper = new Swiper('.banner-promotion .swiper-container', {
		pagination: {
			el: ".banner-promotion .swiper-pagination",
			paginationClickable: true,
			clickable: true
		},
		navigation: {
			nextEl: ".banner-promotion .swiper-button-next",
			prevEl: ".banner-promotion .swiper-button-prev"
		},
		observer: true,
		observeParents: true,
		parallax: true,
		speed: 2000,
		loop: true
	});
	var swiper = new Swiper(".slide-endo .swiper-container", {
		speed: 750,
		observer: true,
		observeParents: true,
		lazy: true,
		breakpointsInverse: true,
		loop: false,
		spaceBetween: 24,
		navigation: {
			nextEl: ".slide-single .swiper-button-next",
			prevEl: ".slide-single .swiper-button-prev"
		},
		breakpoints: {
			320: {
				slidesPerView: 1.5,
			},
			575: {
				slidesPerView: 2.5,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1280: {
				slidesPerView: 5,
			},

		},
	});
	var swiper = new Swiper(".catelog-slide .swiper-container", {
		speed: 750,
		observer: true,
		observeParents: true,
		lazy: true,
		breakpointsInverse: true,
		loop: false,
		navigation: {
			nextEl: ".catelog-slide .swiper-button-next",
			prevEl: ".catelog-slide .swiper-button-prev"
		},
		breakpoints: {
			320: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
			575: {
				slidesPerView: 4,
				spaceBetween: 0,
			},
			1200: {
				slidesPerView: 9,
				spaceBetween: 50,
			},
		},
	});
	var swiper = new Swiper(".pro-flash .swiper-container", {
		speed: 750,
		observer: true,
		observeParents: true,
		lazy: true,
		breakpointsInverse: true,
		loop: false,
		navigation: {
			nextEl: ".pro-flash .swiper-button-next",
			prevEl: ".pro-flash .swiper-button-prev"
		},
		breakpoints: {
			320: {
				slidesPerView: 3,
				spaceBetween: 8,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 8,
			},
			1200: {
				slidesPerView: 6,
				spaceBetween: 8,
			},
			1366: {
				slidesPerView: 8,
				spaceBetween: 8,
			},
		},
	});
	var swiper = new Swiper(".pro-hot .swiper-container", {
		speed: 750,
		observer: true,
		observeParents: true,
		lazy: true,
		breakpointsInverse: true,
		loop: false,
		spaceBetween: 22,
		navigation: {
			nextEl: ".pro-hot .swiper-button-next",
			prevEl: ".pro-hot .swiper-button-prev"
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 8,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 8,
			},
			1200: {
				slidesPerView: 4,
			},
		},
	});
	var swiper = new Swiper(".new-slide .swiper-container", {
		speed: 750,
		observer: true,
		observeParents: true,
		lazy: true,
		breakpointsInverse: true,
		loop: false,
		navigation: {
			nextEl: ".new-slide .swiper-button-next",
			prevEl: ".new-slide .swiper-button-prev"
		},
		pagination: {
			el: ".swiper-pagination",
			paginationClickable: true,
			clickable: true
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 34,
			},
		},
	});
	$(".swiper-mobile .swiper-container").each(function (index, element) {
		var $this = $(this);
		$this.addClass("instance-" + index);
		$this.parent().find(".swiper-button-prev").addClass("swiper-button-prev-" + index);
		$this.parent().find(".swiper-button-next").addClass("swiper-button-next-" + index);

		var swiper = new Swiper(".instance-" + index, {
			speed: 750,
			observer: true,
			observeParents: true,
			lazy: true,
			breakpointsInverse: true,
			loop: false,
			navigation: {
				nextEl: ".swiper-button-next-" + index,
				prevEl: ".swiper-button-prev-" + index,
				clickable: true,

			},
			breakpoints: {
				320: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				575: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 5,
					spaceBetween: 20,
				}
			},
		});
	});
	var swiper = new Swiper(".top-block .swiper-container", {
		speed: 750,
		observer: true,
		observeParents: true,
		lazy: true,
		breakpointsInverse: true,
		loop: false,
		navigation: {
			nextEl: ".top-block .swiper-button-next",
			prevEl: ".top-block .swiper-button-prev"
		},
		breakpoints: {
			375: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			1280: {
				slidesPerView: 5,
				spaceBetween: 10,
			},
		},
	});
	var swiper = new Swiper(".product-slide .swiper-container", {
		speed: 750,
		observer: true,
		observeParents: true,
		lazy: true,
		breakpointsInverse: true,
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: ".product-slide .swiper-button-next",
			prevEl: ".product-slide .swiper-button-prev",
			clickable: true,

		},
		breakpoints: {
			375: {
				slidesPerView: 3,
			},

			768: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},

		},
	});
	var swiper = new Swiper('.news-banner .swiper-container', {
		pagination: {
			el: ".swiper-pagination",
			paginationClickable: true,
			clickable: true
		},
		observer: true,
		observeParents: true,
		parallax: true,
		speed: 2000,
		effect: "fade",
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		fadeEffect: {
			crossFade: true,
		},
		loop: true
	});
	var swiper = new Swiper('.banner-page-product .swiper-container', {
		pagination: {
			el: ".banner-page-product .swiper-pagination",
			paginationClickable: true,
			clickable: true
		},
		observer: true,
		observeParents: true,
		parallax: true,
		speed: 2000,
		loop: true
	});
	var swiper = new Swiper('.page-banner .swiper-container', {
		pagination: {
			el: ".page-banner .swiper-pagination",
			paginationClickable: true,
			clickable: true
		},
		observer: true,
		observeParents: true,
		parallax: true,
		speed: 2000,
		loop: true
	});
	var swiper = new Swiper('.priority-user-banner .swiper-container', {
		pagination: {
			el: ".swiper-pagination",
			paginationClickable: true,
			clickable: true
		},
		observer: true,
		observeParents: true,
		parallax: true,
		speed: 2000,
		effect: "fade",
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		fadeEffect: {
			crossFade: true,
		},
		loop: true
	});
	var swiper = new Swiper(".priority-user-content .swiper-card-promotion .swiper-container", {
		speed: 750,
		observer: true,
		observeParents: true,
		lazy: true,
		breakpointsInverse: true,
		loop: false,
		spaceBetween: 10,
		simulateTouch: false,
		breakpoints: {
			360: {
				navigation: {
					nextEl: ".swiper-card-promotion .swiper-button-next",
					prevEl: ".swiper-card-promotion .swiper-button-prev",
					clickable: true,

				},
				slidesPerView: 3,
				simulateTouch: true
			},
			768: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 4,
			},

		},
	});
}

const headerActive = () => {
	let butonToggle = $('#toggle');
	let header = $('#nav-toggle');
	let section = $('section');
	butonToggle.on('click', (e) => {
		e.preventDefault();
		if ($(window).width() <= 992) {
			butonToggle.toggleClass('active')
			header.toggleClass('active')
			$("#overlay").toggleClass("active")
		} else {
			header.toggleClass('active')
			$("#overlay").toggleClass("active")
		}
	});
	$("#overlay").on("click", function () {
		let $this = $(this);
		$this.removeClass("active");
		butonToggle.removeClass("active");
		header.removeClass("active");
	});
	$('.dropdown-toggle').on('click', () => {
		$('.dropdown .dropdown-menu').slideToggle()
	})
}

const rangeSlide = () => {
	$("#slider-range-min").slider({
		range: "min",
		value: 500,
		min: 50,
		max: 1000,
		slide: function (event, ui) {
			$("#amount").val(ui.value + " Triệu");
			if ($("#amount").val() == 1000 + " Triệu") {
				$("#amount").val(1 + " Tỷ");
			}
		}
	});
	$("#amount").val($("#slider-range-min").slider("value") + "Triệu");

	$("#slider-range-promotion").slider({
		range: "min",
		value: 200,
		min: 1,
		max: 500,
		slide: function (event, ui) {
			$("#amount-promotion").val(ui.value + " Triệu");
			if ($("#amount-promotion").val() == 500 + " Triệu") {
				$("#amount-promotion").val(500 + " triệu");
			}
		}
	});
	$("#amount-promotion").val($("#slider-range-promotion").slider("value") + " Triệu");

	$("#slider-range-card").slider({
		range: "min",
		value: 20,
		min: 1,
		max: 100,
		slide: function (event, ui) {
			$("#amount-card").val(ui.value + " .000.000");
			if ($("#amount-card").val() == 100) {
				$("#amount-card").val(100);
			}
		}
	});
	$("#amount-card").val($("#slider-range-card").slider("value") + " .000.000");
}

const tabPanel = () => {
	$(".header-switcher > li").on("click", function () {
		let $panel = $(this).closest(".card-switcher");
		$panel.find("li.active").removeClass("active");
		$(this).addClass("active");
		let panelToShow = $(this).attr("rel");
		$panel.find(".panel.active").fadeOut(300, showNextPanel);

		function showNextPanel() {
			$(this).removeClass("active");
			$("#" + panelToShow).fadeIn(300, function () {
				$(this).addClass("active").fadeIn(300);
			});
		}
	});
	$(".tab-list > li").on("click", function () {
		let $panel = $(this).closest(".tabs ");
		$panel.find("li.active").removeClass("active");
		$(this).addClass("active");
		let panelToShow = $(this).attr("rel");
		$panel.find(".panel.active").fadeOut(300, showNextPanel);

		function showNextPanel() {
			$(this).removeClass("active");
			$("#" + panelToShow).fadeIn(300, function () {
				$(this).addClass("active").fadeIn(300);
			});
		}

	});

}

/*===================BACKGROUNDELEMENT===========*/
const setBackgroundElement = () => {
	$("[setBackground]").each(function () {
		let background = $(this).attr("setBackground");
		$(this).css({
			"background-image": "url(" + background + ")",
			"background-size": "cover",
			"background-position": "center center",
		});
	});
	$("[setBackgroundRepeat]").each(function () {
		let background = $(this).attr("setBackgroundRepeat");
		$(this).css({
			"background-image": "url(" + background + ")",
			"background-repeat": "repeat",
		});
	});
};

const scrollSection = () => {
	$("#list").click(function (e) {
		e.preventDefault();
		$("html,body").animate({
				scrollTop: $("#sec-4").offset().top,
			},
			"slow"
		);
	});
};
const accordianList = () => {
	$(".accordion-title em").on("click", function (e) {
		let $this = $(this);
		e.preventDefault();
		if ($this.parent().next().hasClass("show")) {
			$this.parent().next().removeClass("show");
			$this.parent().next().slideUp(350);
			$this.closest('li').removeClass("active");
		} else {
			$this.parent().parents().find(".nav-sub").removeClass("show");
			$this.parent().parents().find(".nav-sub").slideUp(350);
			$this.parent().parents('.side-navigation').find("li").removeClass("active");
			$this.parent().next().toggleClass("show");
			$this.parent().next().slideDown(350);
			$this.parents("li").addClass("active");
		}
	});
	if ($(".side-navigation li").hasClass("active")) {
		$(".side-navigation li.active").find(".nav-sub").slideDown(350);
	}
	$(".btn-dropdown").on("click", function () {
		$(this).toggleClass("active");
		$(this).parent().next().slideToggle();
		$(".btn-dropdown").not(this).parent().next().slideUp();
		$(".btn-dropdown").not(this).removeClass("active");
	});
	if ($(window).width() < 768) {
		$(".footer-infor_tile").on("click", function () {
			let $this = $(this);
			if ($this.next().hasClass("show")) {
				$this.next().removeClass("show");
				$this.next().slideUp(350);
				$this.closest('.menu-list').removeClass("active");
			} else {
				$this.parent().parents().find("ul").removeClass("show");
				$this.parent().parents().find("ul").slideUp(350);
				$this.parent().parents('.menu-box').find(".menu-list").removeClass("active");
				$this.next().toggleClass("show");
				$this.next().slideDown(350);
				$this.parent(".menu-list").addClass("active");
			}
		});
	}

};

const toggleSlideTool = () => {
	let btnToggle = $('.from-slide-loan .btn-login');
	btnToggle.on('click', (e) => {
		e.preventDefault();
		$('.card-tool-box').find('#from-slide').slideDown();
		$('.card-tool-box').find('.card-switcher').slideUp();
		$('.card-tool-box').find(".dot span").toggleClass('active')
	})
	$('#from-slide .header-advise li em').on('click', () => {
		$('.card-tool-box').find('#from-slide').slideUp();
		$('.card-tool-box').find('.card-switcher').slideDown()
		$('.card-tool-box').find(".dot span").toggleClass('active')
	})
	$('.title-mobile').on('click', function () {
		$(this).next().slideToggle();
	})
	$('.title-question-box').on('click', function () {
		$(this).next().slideToggle();
		if ($(this).parent().hasClass('active'))
			$(this).parent().removeClass('active')
		else
			$(this).parent().addClass('active')
	})

}

/*==================== SHOW SCROLL TOP ====================*/
const scrollTop = () => {
	$(".footer__logo__arrow").on("click", function (e) {
		e.preventDefault();
		$("html,body").animate({
			scrollTop: 0,
		}, '3000');
	});
};

const initMapping = () => {
	// if ($(window).width() < 992
	$(".home-banner .card-tool-box").mapping({
		mobileWrapper: "#util-wrap",
		mobileMethod: "appendTo",
		desktopWrapper: ".home-banner",
		desktopMethod: "appento",
		breakpoint: 768.98,
	});
};

const handleEventNewsPage = () => {
	$(".section.news-content .btn-show-hide").on("click", function (e) {
		e.preventDefault();
		let $panel = $(this).closest(".main-content ");
		console.log(".btn-loadmore click");
		if ($(".section.news-content .item-news-loadmore").is(":visible")) {
			$(".section.news-content .item-news-loadmore").hide()
			$(".section.news-content .btn-hide").hide()
			$(".section.news-content .btn-loadmore").show()
			var scrollDiv = $panel.find(".btn-loadmore").offset().top - 500;
			console.log(scrollDiv);
			$('html, body').animate({
				scrollTop: scrollDiv
			}, 200);
		} else {
			$(".section.news-content .item-news-loadmore").css("display", "flex")
			$(".section.news-content .btn-loadmore").hide()
			$(".section.news-content .btn-hide").show()
		}
	});

	$(".tab-list-categories > li").on("click", function () {
		let $panel = $(this).closest(".tabs ");
		$panel.find("li.active").removeClass("active");
		$(this).addClass("active");
		let panelToShow = $(this).attr("rel");
		$panel.closest(".tab-box").find(".panel.active").fadeOut(300, showNextPanel);

		function showNextPanel() {
			$(this).removeClass("active");
			$("#" + panelToShow).fadeIn(300, function () {
				$(this).addClass("active").fadeIn(300);
			});
		}
	});
};

const handleEventPriorityUserPage = () => {
	$(".link-info").on("click", function (e) {
		e.preventDefault();
		let $customers = $(this).closest(".list-customers");
		$customers.find(".item-customer.active").removeClass("active");
		$(this).closest(".item-customer").addClass("active");
		// let panelToShow = $(this).attr("rel");
		// $customer.closest(".tab-box").find(".panel.active").fadeOut(300, showNextPanel);

		// function showNextPanel() {
		// 	$(this).removeClass("active");
		// 	$("#" + panelToShow).fadeIn(300, function () {
		// 		$(this).addClass("active").fadeIn(300);
		// 	});
		// }
	});
};

/*==================== LOAD FUNCTION ====================*/
$(document).ready(function () {
	mainBanner();
	headerActive();
	rangeSlide();
	tabPanel();
	setBackgroundElement();
	scrollSection();
	accordianList();
	toggleSlideTool();
	scrollTop();
	initMapping();
	handleEventNewsPage();
	handleEventPriorityUserPage();
});