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
	$(".single-swiper .swiper-container").each(function (index, element) {
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
				1280: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				1366: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				1400: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
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
	var swiper = new Swiper(".slide-endo .swiper-container", {
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
			1200: {
				slidesPerView: 4,
				spaceBetween: 24,
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
		navigation: {
			nextEl: ".pro-hot .swiper-button-next",
			prevEl: ".pro-hot .swiper-button-prev"
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
				spaceBetween: 22,
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
		breakpoints: {
			1200: {
				slidesPerView: 3,
				spaceBetween: 34,
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
		header.addClass('active');
	});
	section.on('click', (e) => {
		e.preventDefault();
		header.removeClass('active');
	})
	$('#click-toggle').on('click', () => {
		$('.language').toggleClass('active');
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
};

const toggleSlideTool = () => {
	let btnToggle = $('#panel-1 .from-slide-loan .btn-login');
	btnToggle.on('click', (e) => {
		e.preventDefault();
		$('.card-tool-box').find('#from-slide').slideDown();
		$('.card-tool-box').find('.card-switcher').slideUp()
	})
	$('#from-slide .header-advise li em').on('click', () => {
		$('.card-tool-box').find('#from-slide').slideUp();
		$('.card-tool-box').find('.card-switcher').slideDown()
	})
}

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
	$('.carouselTicker').carouselTicker();
});