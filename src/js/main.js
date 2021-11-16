const mainBanner = () => {
	var swiper = new Swiper('.home-banner .swiper-container', {
		pagination: {
			el: ".swiper-pagination",
		},
		paginationClickable: true,
		parallax: true,
		speed: 2000,
		effect: "fade",
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// },
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
			spaceBetween: 30,
			slidesPerView: 3,
			loop: false,
			navigation: {
				nextEl: ".swiper-button-next-" + index,
				prevEl: ".swiper-button-prev-" + index
			},
			// breakpoints: {
			// 	375: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 10,
			// 	},
			// },
		});
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
/*==================== LOAD FUNCTION ====================*/
$(document).ready(function () {
	mainBanner();
	headerActive();
	rangeSlide();
	tabPanel();
	setBackgroundElement();
	scrollSection();
});