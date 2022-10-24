// use js
// get input value 0 to 360
// use that value to rotate box by the input degrees
// add transition to make box appear to rotate
box = document.getElementsByClassName("box");
input = document.getElementById("degrees");
const styleSheet = document.styleSheets[0];
// console.log(styleSheet.cssRules[6].style);
console.log(input.value);
// transform: rotate(105deg);
styleSheet.cssRules[6].style.setProperty("transform", "rotate(105deg)");
