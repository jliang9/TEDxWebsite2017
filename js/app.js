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

/* var years = [document.querySelector("#2017"), document.querySelector("#2016"), document.querySelector("#2015"), document.querySelector("#2014")];
var allSpeakers = document.querySelectorAll(".mdl-card")
for (var j = 0; j < years.length; j++) {
    var year = years[i];
    var cssVar = 2017 - i;
    year.addEventListener("click", function showSpeakers() {
        makeInactive(years, cssVar);
        showSpeakersHelper("speaker-" + cssVar);
    });
}

function makeInactive(array, activeName) {
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (item.id == activeName) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    }
}

function showSpeakersHelper(className) {
    for (int i = 0; i < allSpeakers.length; i++) {
        var speaker = allSpeakers[i];
        if (speaker.classList.contains(className)) {
            speaker.classList.remove("hide");
        } else {
            speaker.classList.add("hide");
        }
    }
} */