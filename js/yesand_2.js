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

	var buttonPosition;

	$(document).ready(function() {
		$('#yesand').fullpage({
			// Navigation
			navigation: true,
			anchors: ['yesandTedxUofW', 'yesandSpeakers', 'yesandtheTeam', 'yesandSponsors'],

			// Custom selectors
			sectionSelector: '.yesand-section',

			// Events
		    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
				$('.yesand-section').removeClass('active');
				$('.yesand-section').eq(slideIndex).addClass('active');
		    },

		    onLeave: function(index, nextIndex, direction) {
		    	//going to section 1
		    	if (index == 2 && direction == 'up') {
		    		// Remove the ampersand
		    		$('.yesand-ampersand').removeClass('fadeInRight');
		    		$('.yesand-ampersand').addClass('fadeOutRight');
		    		$('.yesand-ampersand').css('opacity', '0');

		    		// Add the trapezoid back in
		    		$('.yesand-trapezoid').removeClass('fadeOutRight');
		    		$('.yesand-trapezoid').addClass('fadeInRight');

		    		// Remove white background
		    		$('.yesand-section h3').css('background-color', 'transparent');
		    	}

			    // 	going to section 2
		    	if (index == 1 && direction == 'down') {
		    		// Remove the trapezoid
		    		$('.yesand-trapezoid').removeClass('fadeInRight');
		    		$('.yesand-trapezoid').addClass('fadeOutRight');

		    		// Add the ampersand
		    		$('.yesand-ampersand').css('opacity', '1');
		    		$('.yesand-ampersand').removeClass('fadeOutRight');
		    		$('.yesand-ampersand').addClass('animated fadeInRight');

		    		if (window.matchMedia('(max-width: 992px)').matches) {
		    			$('.yesand-section h3').css('background-color', 'white');
		    		}
		    	}

	    		$('.active .yesand-buttons').css('top', buttonPosition.top);
	    		$('.active .yesand-buttons').css('left', buttonPosition.left);
			}
		});

		reposition();
		$(window).resize(reposition);
	});

	function reposition() {
		// Revert the position of the original buttons
		$('.yesand-section .yesand-buttons').css('display', 'none');

		// Get CSS of the original
		var yesandH3Original = $("#yesand-h3-original").offset();
		buttonPosition = $("#yesand-buttons-original").offset();

		// Set the attribute to the fullpage.js elements
		$('.yesand-h3').css('top', yesandH3Original.top);
		$('.yesand-h3').css('left', yesandH3Original.left);
		$('.yesand-buttons').css('top', buttonPosition.top);
		$('.yesand-buttons').css('left', buttonPosition.left);
		$('.yesand-buttons').css('display', 'block');

		// Hide the original
		$("#yesand-buttons-original").css('visibility', 'hidden');
		$("#yesand-h3-original").css('visibility', 'hidden');
	}
});