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

var years = [document.querySelector("#year-2017"), document.querySelector("#year-2016"), document.querySelector("#year-2015"), document.querySelector("#year-2014"), document.querySelector("#year-2013"), document.querySelector("#year-2012")];
var allSpeakers = document.querySelectorAll(".mdl-cell.mdl-cell--4-col.demo-card-wide.mdl-card.mdl-shadow--2dp");

for (var i = 0; i < years.length; i++) {
    years[i].addEventListener("click", function showSpeakersByYear() {
        var classListLength = this.classList.length;
        showActiveYear(this);
        showSpeakers(2017 - years.indexOf(this));
    });
}

function showActiveYear(year) {
    for (var j = 0; j < years.length; j++) {
        years[j].classList.remove("active");
    }
    year.classList.add("active");

}

function showSpeakers(speakerYear) {
    for (var i = 0; i < allSpeakers.length; i++) {
        var speaker = allSpeakers[i];
        if (speaker.classList.contains("speaker-" + speakerYear)) {
            speaker.classList.remove("hide");
        } else {
            speaker.classList.add("hide");
        }
    }
}