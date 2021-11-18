const mainBanner = () => {
	var swiper = new Swiper('.home-banner .swiper-container', {
		pagination: {
			el: ".swiper-pagination",
			paginationClickable: true,
			clickable: true
		},
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
		parallax: true,
		speed: 2000,
		loop: true
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

/*==================== LOAD FUNCTION ====================*/
$(document).ready(function () {
	mainBanner();
	headerActive();
	rangeSlide();
	tabPanel();
	setBackgroundElement();
	scrollSection();
	accordianList();
});