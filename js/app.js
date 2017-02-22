"use strict";

var overlay = document.querySelector(".overlay");
var trapezoid = document.querySelector(".trapezoid");

function addHide(object) {
    object.addEventListener("click", function hide() {
        trapezoid.classList.toggle("hide");
        overlay.classList.toggle("hide");
    });
}

addHide(overlay);
addHide(trapezoid);
var readMore = document.querySelectorAll(".mdl-button")
for (var i = 0; i < readMore.length; i++) {
    var button = readMore[i];
    addHide(button);
}