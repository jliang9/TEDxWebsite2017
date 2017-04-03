/* This is the JavaScript file for about.html */

"use strict";
var COMMITTEES = ["Curators", "Design", "Finance", "Speaker Selection", "Production", "Public Relations"];

window.onload = function() {
    loadSpeakers();
}

function loadSpeakers() {
    var aboutTeamDiv = document.querySelector("#about-teams");
    for (var i = 0; i < COMMITTEES.length; i++) {
        var committeeName = COMMITTEES[i];
        var committeeDiv = document.createElement("div");
        committeeDiv.classList.add("team");
        var header = document.createElement("h3");
        header.innerText = committeeName.toUpperCase();
        var row = document.createElement("div");
        row.classList.add("row");
        displayMembers(committeeName, row);
        committeeDiv.appendChild(header);
        committeeDiv.appendChild(row);
        aboutTeamDiv.appendChild(committeeDiv);
    }
}

function displayMembers(committeeName, row){
    var members = TEAM_DB[committeeName];
    for (var i = 0; i < members.length; i++) {
        var member = createMember(members[i]);
        row.appendChild(member);
    }
}

function createMember(member) {
    var returnContainer = document.createElement("div");
    returnContainer.classList.add("col-12");
    returnContainer.classList.add("col-md-3");
    returnContainer.classList.add("team-member");
    addImage(member, returnContainer);
    addName(member, returnContainer);
    addPosition(member, returnContainer);
    return returnContainer;
}

function addImage(member, returnContainer) {
    var img = document.createElement("img");
    img.src = "./media/team-photos/" + member["imgNumber"] + ".jpg";
    img.alt = "";
    img.classList.add("img-fluid");
    img.classList.add("team-member-thumbnail");
    img.addEventListener("mouseover", function() {
        img.src = "./media/team-photos/" + member["imgNumber"] + "Color.gif";
    });
    img.addEventListener("mouseleave", function() {
        img.src = "./media/team-photos/" + member["imgNumber"] + ".jpg";
    });
    returnContainer.appendChild(img);
}

function addName(member, returnContainer) {
    var name = document.createElement("p");
    name.innerText = member["name"].toUpperCase();
    name.classList.add("name");
    returnContainer.appendChild(name);
}

function addPosition(member, returnContainer) {
    if (member["position"] !== "") {
        var position = document.createElement("p");
        position.innerText = member["position"];
        position.classList.add("position");
        returnContainer.appendChild(position);
    }
}