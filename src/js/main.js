const mainBanner = () => {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		parallax: true,
		speed: 600,

	});
}

/*==================== LOAD FUNCTION ====================*/
$(document).ready(function () {
	mainBanner();
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