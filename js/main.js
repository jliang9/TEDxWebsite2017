$(function() {
	"use strict";

	$(document).ready(function() {
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
});