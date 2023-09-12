const menu = document.getElementById("menu");
const x = document.getElementById("x");
const expanded = document.getElementById("expanded");
const hamburger = document.getElementById("menu-icon");

hamburger.addEventListener("click", function () {
  hamburger.style.visibility = "hidden";
  expanded.style.visibility = "visible";
});
x.addEventListener("click", function () {
  hamburger.style.visibility = "visible";
  expanded.style.visibility = "hidden";
});
