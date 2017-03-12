"use strict";

var grid = document.querySelector(".mdl-grid");
var body = document.querySelector("body");

var overlay = document.querySelector(".overlay");

function addHide(object, popup) {
    object.addEventListener("click", function hide() {
        overlay.classList.toggle("hide");
        popup.classList.toggle("hide");
    });
}

for (var i = 0; i < speakerDb.length; i++) {
    var speakerName = speakerDb[i]["name"];
    var speechName = speakerDb[i]["speech"];
    var speakerYear = speakerDb[i]["year"];
    var cell = createCell(speakerYear);
    var media = createMedia(speakerName, speakerYear);
    var title = createTitle(speakerName);
    var subtitle = createSubheader(speechName);
    var button = createButton();
    var popup = createPopup(speakerName, speakerDb[i]["video"], speakerDb[i]["desc"]);
    addHide(button, popup);
    addHide(overlay, popup);
    addHide(popup, popup);
    body.appendChild(popup);
    cell.appendChild(media);
    cell.appendChild(title);
    cell.appendChild(subtitle);
    cell.appendChild(button);
    grid.appendChild(cell);
}

function createPopup(name, url, desc) {
    var returnPopup = document.createElement("div");
    returnPopup.classList.add("modal", "hide");
    var trap = document.createElement("div");
    trap.classList.add("trapezoid");
    var header = document.createElement("h2");
    header.innerText = name.toUpperCase();
    var iframe = document.createElement("iframe");
    iframe.src = url;
    var descWrapper = createParentElement(["wrapper"]); 
    var descPara = document.createElement("p");
    descPara.innerText = desc;
    descWrapper.appendChild(descPara);
    trap.appendChild(header);
    trap.appendChild(iframe);
    trap.appendChild(descWrapper);
    returnPopup.appendChild(trap);
    return returnPopup;
}

function createParentElement(attributes) {
    var returnElement = document.createElement("div");
    for (var i = 0; i < attributes.length; i++) {
        returnElement.classList.add(attributes[i]);
    }
    return returnElement

}

function createCell(year) {
    var returnCell = createParentElement(["mdl-cell", "mdl-cell--4-col", "demo-card-wide", "mdl-card", "mdl-shadow--2dp", "speaker-" + speakerYear]);
    if (year !== 2017) {
        returnCell.classList.add("hide");
    }
    return returnCell;
}

function createMedia(name, year) {
    var returnMedia = createParentElement(["mdl-card__media"]);
    var img = document.createElement("img");
    img.src = "./media/speakers-" + year + "/" +  name.toLowerCase().replace(" ", "-") + ".jpg";
    img.alt = name;
    returnMedia.appendChild(img);
    return returnMedia;
}

function createTitle(name) {
    var returnTitle = createParentElement(["mdl-card__title"]);
    var title = document.createElement("h2");
    title.innerText = name;
    returnTitle.appendChild(title);
    return returnTitle;
}

function createSubheader(title) {
    var returnSubheader = createParentElement(["mdl-card__supporting-text"]);
    returnSubheader.classList.add("mdl-card__supporting-text");
    var subheader = document.createElement("h6");
    subheader.innerText = title;
    returnSubheader.appendChild(subheader);
    return returnSubheader;
}

function createButton() {
    var returnButton = createParentElement(["mdl-card__actions", "mdl-card--border"]);
    var link = document.createElement("a");
    link.classList.add("mdl-button", "mdl-button--colored", "mdl-js-button", "mdl-js-ripple-effect");
    link.innerText = "Read more";
    returnButton.appendChild(link);
    return returnButton;
}

var years = [document.querySelector("#year-2017"), document.querySelector("#year-2016"), document.querySelector("#year-2015"), document.querySelector("#year-2014"), document.querySelector("#year-2013"), document.querySelector("#year-2012")];
var allSpeakers = document.querySelectorAll(".mdl-cell.mdl-cell--4-col.demo-card-wide.mdl-card.mdl-shadow--2dp");

for (var i = 0; i < years.length; i++) {
    years[i].addEventListener("click", function showSpeakersByYear() {
        var classListLength = this.classList.length;
        showActiveYear(this);
        showSpeakers(2017 - years.indexOf(this));
        showMessage(this);
    });
}

function showMessage(year) {
    var message = document.querySelector(".message");
    var year2017 = document.querySelector("#year-2017");
    if (year2017.classList.contains("active")) {
        message.classList.remove("hide");
    } else {
        message.classList.add("hide");
    }
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