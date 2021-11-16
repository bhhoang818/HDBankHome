const mainBanner = () => {
	var swiper = new Swiper('.home-banner .swiper-container', {
		pagination: '.swiper-pagination',
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
/*==================== LOAD FUNCTION ====================*/
$(document).ready(function () {
	mainBanner();
	headerActive();
	$(function () {
		$("#slider").slider({
			value: 500,
			min: 50,
			max: 1000,
			step: 10,
			slide: function (event, ui) {
				$(ui.handle)
					.find(".tooltip")
					.text(ui.value + " Triệu");
				$("#amount").val(ui.value + " Triệu");
				if ($("#amount").val() == 1000 + " Triệu") {
					$("#amount").val(1 + " Tỷ");
				}
			},
			// create: function (event, ui) {
			// 	var tooltip = $('<div class="tooltip" />');
			// 	$(event.target).find(".ui-slider-handle").append(tooltip);
			// },
			change: function (event, ui) {
				$("#hidden").attr("value", ui.value);
			},
		});
	});
});