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

/*for (var i = 0; i < speakerDb.length; i++) {
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
*/

// Record that upon loading of webpage, all content has not been loaded except for speakers from 2017
var hasClicked = [true];
for (var j = 2017; j >= 2012; j--) {
    hasClicked.push(false);
}

// Obtain unordered list items representing years
var years = [document.querySelector("#year-2017"), document.querySelector("#year-2016"), document.querySelector("#year-2015"), document.querySelector("#year-2014"), document.querySelector("#year-2013"), document.querySelector("#year-2012")];

for (var i = 0; i < years.length; i++) {
    years[i].addEventListener("click", function showSpeakersByYear() {
        // Obtain divs that have been created representing speakers
        var allSpeakers = document.querySelectorAll(".mdl-cell.mdl-cell--4-col.demo-card-wide.mdl-card.mdl-shadow--2dp");
        // If the content for the year has not been loaded
        showActiveYear(this);
        clearGrid(allSpeakers);
        var year = 2017 - years.indexOf(this);
        if (hasClicked[i]) {
            var classListLength = this.classList.length;
            showSpeakers(year, allSpeakers);
        } else {
            loadContent(year);
        }
    });
} 

function showActiveYear(year) {
    for (var j = 0; j < years.length; j++) {
        years[j].classList.remove("active");
    }
    year.classList.add("active");

}

function clearGrid(speakerList) {
    for (var i = 0; i < speakerList.length; i++) {
        var speaker = speakerList[i];
        speaker.classList.add("hide");
    }
}

function showSpeakers(year, speakerList) {
    for (var i = 0; i < speakerList.length; i++) {
        var speaker = speakerList[i];
        if (speaker.classList.contains("speaker-" + year)) {
            speaker.classList.remove("hide");
        }
    }
}

function loadContent(year) {
    var speakersByYear = speakerDb[year];
    for (var i = 0; i < speakersByYear.length; i++) {
        var speakerName = speakersByYear[i]["name"];
        var speechName = speakersByYear[i]["speech"];
        var cell = createCell(year);
        var media = createMedia(speakerName, year);
        var title = createTitle(speakerName);
        var subtitle = createSubheader(speechName);
        var button = createButton();
        // Trapeziod popup
        var popup = createPopup(speakerName, speakersByYear[i]["video"], speakersByYear[i]["desc"]);
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
    var returnCell = createParentElement(["mdl-cell", "mdl-cell--4-col", "demo-card-wide", "mdl-card", "mdl-shadow--2dp", "speaker-" + year]);
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