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
		      $('.yesand-section.active').removeClass('active');
		      $('.yesand-section').eq(slideIndex).addClass('active');
		    },

		    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){

		    }
		});
	});
});