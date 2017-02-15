"use strict";

var tog = document.getElementById("tog");
var thing = document.getElementById("thing");
var thing2 = document.getElementById("thing2");

tog.addEventListener("click", function() {
  
  thing.classList.toggle("m-fadeOut");
  thing2.classList.toggle("m-fadeIn");
  
});