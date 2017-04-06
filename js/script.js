/*
 * This is common JS code for TedxUofW.com 
 * 
 * Using the codes from
 * https://css-tricks.com/jquery-magicline-navigation/
 */

$(function() {
	"use strict";

	$(document).ready(function() {
		// change navbar style based on the screen size
		navbarStyling();
        $(window).resize(navbarStyling);

		// collapse navbar on scroll
		// max 992px only
        if (window.matchMedia('(max-width: 991px)').matches) {
            $(window).scroll(collapseNavbar);
        }

        // show message sent confirmation in snackbar form
        var sendMessageBtn = $('#send-message');
        sendMessageBtn.click(messageSent);
	});

    // collapse a navbar when scroolled down from the top
    function collapseNavbar() {
        var value = $(window).scrollTop();
        var navLogo = $('#nav-logo');
        var navbarBrand = $('.navbar-brand');
        var logo = $('.logo');
        var navSocialMedia = $('#nav-socialmedia');
        var navSocialMediaUl = $('#nav-socialmedia ul');

        if (value == 0) {
            navbarBrand.css('padding', '0');
            logo.css('height', 'inherit');
            navLogo.removeClass('col-4');
            navSocialMedia.removeClass('col-8');
            navSocialMediaUl.addClass('justify-content-center');
            navSocialMediaUl.removeClass('justify-content-end');
        } else {
            navbarBrand.css('padding', '.5em 0');
            logo.css('height', 'auto');
            navLogo.addClass('col-4');
            navSocialMedia.addClass('col-8');
            navSocialMediaUl.removeClass('justify-content-center');
            navSocialMediaUl.addClass('justify-content-end');

        }
    }

    // show message sent confirmation
    function messageSent() {
        var notification = document.querySelector('.mdl-js-snackbar');
        var data = {
          message: 'Message Sent',
          actionHandler: function(event) {},
          actionText: ' ',
          timeout: 1000
        };
        notification.MaterialSnackbar.showSnackbar(data);
    }

	function navbarStyling() {
		// smaller than desktop version (max-992px)
		if (window.matchMedia('(max-width: 991px)').matches) {
			$('#nav-menu ul').addClass('justify-content-center');
			$('#nav-socialmedia ul').addClass('justify-content-center');
		} else {
			$('#nav-menu ul').removeClass('justify-content-center');
			$('#nav-socialmedia ul').removeClass('justify-content-center');
			$('#nav-socialmedia ul').addClass('justify-content-end');
		}
	}
});