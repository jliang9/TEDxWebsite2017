$(function() {
    "use strict";

    $(document).ready(function() {
        if (window.matchMedia('(max-width: 991px)').matches) {
            $(window).scroll(collapseNavbar);
        }

        // show message sent confirmation in snackbar form
        var sendMessageBtn = $('#send-message');
        sendMessageBtn.click(messageSent);
    });

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
});