const mainBanner = () => {
	let names = []
	$(".swiper-wrapper .swiper-slide").each(function (i) {
		names.push($(this).data("name"));
	});
	let swiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">'
					+ '<div class="bullet-inner">'
					+ '<p class="number">' + "0" + ([index + 1]) + '</p>'
					+ '<p class="name">' + (names[index]) + '</p>'
					+ '</div>'
					+ '</span>';
			},
		},
		watchSlidesProgress: true,
		autoplay: {
			delay: 2580,
			disableOnInteraction: false,
		},
		loop: true,
	});

	document.addEventListener('mouseenter', event => {
		const el = event.target;
		if (el && el.matches && el.matches('.swiper-container')) {
			el.swiper.autoplay.stop();
			el.classList.add('swiper-paused');

			const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');
			// activeNavItem.style.animationPlayState = "paused";
		}
	}, true);

	document.addEventListener('mouseleave', event => {
		const el = event.target;
		if (el && el.matches && el.matches('.swiper-container')) {
			el.swiper.autoplay.start();
			el.classList.remove('swiper-paused');

			const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');

			activeNavItem.classList.remove('swiper-pagination-bullet-active');

			setTimeout(() => {
				activeNavItem.classList.add('swiper-pagination-bullet-active');
			}, 10);
		}
	}, true);
}

/*==================== LOAD FUNCTION ====================*/
$(document).ready(function () {
	mainBanner();
});
