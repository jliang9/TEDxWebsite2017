/**
 * fullPage 1.4.9
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 * 
 * Modified by shinyounglucia
 */

$(function() {
	"use strict";

	// fullpage customization
	$(document).ready(function() {
		$('#yesand').fullpage({
			// Navigation
			sectionSelector: '.vertical-scrolling',
			navigation: true,
			anchors: ['yesandTedxUofW', 'yesandSpeakers', 'yesandAboutUs', 'yesandSponsors'],

			// Events
		    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
				$('.yesand-section').removeClass('active');
				$('.yesand-section').eq(slideIndex).addClass('active');
		    },

		    onLeave: function(index, nextIndex, direction) {
		    	var sections = $('.yesand-section');
		    	for (var i = 1; i < sections.length; i++) {
		    		if (i == nextIndex) {
		    			$('.yesand-section').eq(slideIndex).addClass('animateTrapezoid');
		    			$(sections[i]).css('background-color', 'blue');
		    		}
		    		$(sections[i], '.yesand-background').css('background-color', 'white');
		    	}
		    }
		});
	});
});