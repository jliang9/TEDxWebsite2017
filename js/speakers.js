/* This is the JavaScript file for speakers.html */

"use strict";

/* Global variables */

// Record that upon loading of webpage, all content has not been loaded except for speakers from 2017
var HAS_CLICKED = [true];
for (var j = 2017; j >= 2012; j--) {
    HAS_CLICKED.push(false);
}

// Retrieve MDL grid
var GRID = document.querySelector(".mdl-grid");

// Retrieve body
var BODY = document.querySelector("body");

// Retrieve dark overlay
var OVERLAY = document.querySelector(".overlay");

// Retrieve list items representing years
var YEARS = document.querySelectorAll("main nav div ul li a");

window.onload = function() {

    // Load and display 2017 speakers
    loadSpeakers(2017);

    // Make navbar elements execute necessary functions when clicked
    configNavBar();

}

/* Display and load speakers */

// If a year is clicked on the navbar, show which year is selected, and load content if the year has not been clicked on before. 
// If it has been loaded, display the content.
function configNavBar() {
    for (var i = 0; i < YEARS.length; i++) {
        YEARS[i].addEventListener("click", function() {
            showActiveYear(this);
            displaySpeakers(Number(this.innerText));
        });
    }
}

// Show the year of speakers that is selected and displayed
function showActiveYear(year) {
    for (var i = 0; i < YEARS.length; i++) {
        YEARS[i].classList.remove("active");
    }
    year.classList.add("active");
}

// Displays all the speakers from a given year, given all the speakers that have been loaded.
function displaySpeakers(year) {
    clearGrid();
    if (HAS_CLICKED.indexOf(2017 - year) === true) {
        unhideSpeakers(year);
    } else {
        loadSpeakers(year);
    }
}

// Clear MDL grid of all the speakers
function clearGrid() {
    // Select all the MDL cards that are visible
    var gridContents = document.querySelectorAll(".mdl-cell.mdl-cell--4-col.demo-card-wide.mdl-card.mdl-shadow--2dp:not(.hide)");
    for (var i = 0; i < gridContents.length; i++) {
        gridContents[i].classList.add("hide");
    }
}

// Makes speakers cards appear from a given year.
function unhideSpeakers(year) {
    var speakersList = document.querySelectorAll(".mdl-cell.mdl-cell--4-col.demo-card-wide.mdl-card.mdl-shadow--2dp");
    for (var i = 0; i < speakersList.length; i++) {
        var speaker = speakersList[i];
        if (speaker.classList.contains("speaker-" + year)) {
            speaker.classList.remove("hide");
        }
    }
}

// Loads the content for each speaker from a given year if it has not yet been loaded..
function loadSpeakers(year) {
    var speakersFromYear = SPEAKER_DB[year];
    for (var i = 0; i < speakersFromYear.length; i++) {
        var name = speakersFromYear[i]["name"];
        var cell = createCell(name, year, speakersFromYear[i]["speech"]);
        var trapezoidPopup = createPopup(name, speakersFromYear[i]["video"], speakersFromYear[i]["desc"]);
        BODY.appendChild(trapezoidPopup);
        GRID.appendChild(cell);
    }
    HAS_CLICKED[2017 - year] = true;
}

// Creates and returns an MDL card for a speaker given their name, year, and name of speech
function createCell(name, year, speechName) {
    var returnCell = createParentElement(["mdl-cell", "mdl-cell--4-col", "demo-card-wide", "mdl-card", "mdl-shadow--2dp", "speaker-" + year]);
    var media = createMedia(name, year);
    var title = createTitle(name);
    var subtitle = createSubheader(speechName);
    var button = createButton();
    returnCell.appendChild(media);
    returnCell.appendChild(title);
    returnCell.appendChild(subtitle);
    returnCell.appendChild(button);
    return returnCell;
}

// Creates and returns a HTML parent div given a list of attributes.
function createParentElement(attributes) {
    var returnElement = document.createElement("div");
    for (var i = 0; i < attributes.length; i++) {
        returnElement.classList.add(attributes[i]);
    }
    return returnElement;

}

// Creates trapezoid popup for a speaker given their name, video url, and dsecription
function createPopup(name, url, desc) {
    var returnPopup = document.createElement("div");
    returnPopup.classList.add("modal", "hide");
    var trap = document.createElement("div");
    trap.classList.add("trapezoid", "hide");
    var header = document.createElement("h1");
    header.innerText = name.toUpperCase();
    var iframe = document.createElement("iframe");
    iframe.src = url;
    var descWrapper = createParentElement(["wrapper"]); 
    var descPara = document.createElement("p");
    descPara.innerText = desc;
    descWrapper.appendChild(descPara);
    trap.appendChild(header);
    trap.appendChild(iframe);
    trap.appendChild(descWrapper);
    returnPopup.appendChild(trap);
    return returnPopup;
}

// Creates image for speaker MDL card given the speaker name and year
function createMedia(name, year) {
    var returnMedia = createParentElement(["mdl-card__media"]);
    var img = document.createElement("img");
    name = name.toLowerCase().replace(" ", "-");
    img.src = "./media/speakers-" + year + "/" +  name + ".jpg";
    img.alt = name;
    returnMedia.appendChild(img);
    return returnMedia;
}

// Creates title for speaker MDL card given the speaker name
function createTitle(name) {
    var returnTitle = createParentElement(["mdl-card__title"]);
    var title = document.createElement("h2");
    title.innerText = name;
    returnTitle.appendChild(title);
    return returnTitle;
}

// Creates subheader for speaker MDL card given the speech name
function createSubheader(title) {
    var returnSubheader = createParentElement(["mdl-card__supporting-text"]);
    returnSubheader.classList.add("mdl-card__supporting-text");
    var subheader = document.createElement("h6");
    subheader.innerText = title;
    returnSubheader.appendChild(subheader);
    return returnSubheader;
}

// Creates button for speaker MDL card
function createButton() {
    var returnButton = createParentElement(["mdl-card__actions", "mdl-card--border"]);
    var link = document.createElement("a");
    link.classList.add("mdl-button", "mdl-button--colored", "mdl-js-button", "mdl-js-ripple-effect");
    link.innerText = "Read more";
    returnButton.appendChild(link);
    return returnButton;
}

// Allows an object and its respective popup to toggle hide
function addHide(object, popup) {
    object.addEventListener("click", function hide() {
        overlay.classList.toggle("hide");
        popup.classList.toggle("hide");
    });
}