"use strict";

var overlay = document.querySelector(".overlay");
var trapezoid = document.querySelector(".trapezoid");
overlay.addEventListener("click", function hide() {
    trapezoid.classList.toggle("hide");
    overlay.classList.toggle("hide");
});

var readMore = document.querySelectorAll(".mdl-button")
for (var i = 0; i < readMore.length; i++) {
    var button = readMore[i];
    button.addEventListener("click", function show() {
        trapezoid.classList.toggle("hide");
        overlay.classList.toggle("hide");
    });
}