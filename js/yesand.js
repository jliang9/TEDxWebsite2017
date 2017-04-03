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

	$(document).ready(function() {
		$('#yesand').fullpage({
			// Navigation
			navigation: true,
			anchors: ['yesandTedxUofW', 'yesandSpeakers', 'yesandAboutUs', 'yesandSponsors'],

			// Custom selectors
			sectionSelector: '.yesand-section',

			// Events
		    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
				$('.yesand-section').removeClass('active');
				$('.yesand-section').eq(slideIndex).addClass('active');
		    },

		    onLeave: function(index, nextIndex, direction) {
		    	var leavingSection = $(this);
		    	$('.yesand-text', leavingSection).removeClass('animated slideInDown');
		    	$('.yesand-background', leavingSection).removeClass('animated slideInUp');

		    	var sections = document.querySelectorAll('.yesand-section');

		    	// going to section 1
		    	if (index == 2 && direction == 'up') {
		    		var section1 = sections[0];
		    		$('.yesand-background', section1).addClass('animated slideInUp');
		    		$('.yesand-text', section1).addClass('animated slideInDown');
		    	}

		    	// going to section 2
		    	if (index == 1 && direction == 'down' || 
		    		index == 3 && direction == 'up') {
		    		var section2 = sections[1];
		    		$('.yesand-background', section2).addClass('animated slideInUp');
		    		$('.yesand-text', section2).addClass('animated slideInDown');
		    	}

		    	// going to section 3
		    	if (index == 2 && direction == 'down' || 
		    		index == 4 && direction == 'up') {
		    		var section3 = sections[2];
		    		$('.yesand-background', section3).addClass('animated slideInUp');
		    		$('.yesand-text', section3).addClass('animated slideInDown');
		    	}

		    	// going to section 4
		    	if (index == 3 && direction == 'down') {
		    		var section4 = sections[3];
		    		$('.yesand-background', section4).addClass('animated slideInUp');
		    		$('.yesand-text', section4).addClass('animated slideInDown');
		    	}
		    }
		});
	});
});