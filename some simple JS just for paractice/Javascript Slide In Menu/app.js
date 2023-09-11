const menu = document.getElementById("menu");
const x = document.getElementsByClassName("x");
const expanded = document.getElementsByClassName("expanded");

// on click of menu make menu-icon display none and .expanded display active
// on click of the X in the selector makes expaned disply none and menu icon display active

// use css to make the transion of above soothe

menu.addEventListener("click", function () {
  menu.display("none");
  expanded.classList.display("active");
});
