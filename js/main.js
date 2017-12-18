;(function ($) {
	"use strict";

	$(document).ready(function () {

		$('.ba-tab-menu').on('click', 'a', function (e) {
			e.preventDefault();

			$('.ba-tab-menu__item').removeClass('ba-tab-menu__item--active');
			$(this).addClass('ba-tab-menu__item--active');

			var tabId = $(this).data('tab');
			$('.ba-tab').removeClass('ba-tab--active');
			$('#' + tabId).addClass('ba-tab--active');

		});

	});

})(jQuery);