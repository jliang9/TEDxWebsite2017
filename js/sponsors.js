/*
 * Copyright (c) 2017 by Jonathan White (http://codepen.io/jonathanzwhite/pen/GZVKmE)
 *
 * Modified by shinyounglucia
 */

 $(function() {
	"use strict";

	$(document).ready(function() {
		$('.post-module').hover(function() {
			$(this).find('.description').stop().animate({
				height: "toggle",
				opacity: "toggle"
			}, 300);
		});
	});
});