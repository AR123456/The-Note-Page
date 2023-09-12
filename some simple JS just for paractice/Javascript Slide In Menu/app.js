// const menu = document.getElementById("menu");
// const x = document.getElementById("x");
// const expanded = document.getElementById("expanded");
// const hamburger = document.getElementById("menu-icon");

// hamburger.addEventListener("click", function () {
//   hamburger.style.opacity = "0";
//   expanded.style.opacity = "1";
//   expanded.style.pointerEvents =
//     "auto"; /* Enable pointer events for visible element */
// });
// x.addEventListener("click", function () {
//   hamburger.style.opacity = "1";
//   expanded.style.opacity = "0";
//   expanded.style.pointerEvents =
//     "none"; /* Disable pointer events for hidden element */
// });

// // burger menu - cannot use icon since it needs to animate from X to three lines back and forth.  The burger/x one or the other is always on the page
// // likely cannot use visibility seems it needs to slide on and off page so likely css to move one into view and other out of view
// // need to figure out how to transition that movement
const menu = document.getElementById("menu");
const x = document.getElementById("x");
const expanded = document.getElementById("expanded");
const hamburger = document.getElementById("menu-icon");

hamburger.addEventListener("click", function () {
  menu.classList.add("expanded"); // Add the "expanded" class
});

x.addEventListener("click", function () {
  menu.classList.remove("expanded"); // Remove the "expanded" class
});
