const styleSheet = document.styleSheets[0];

styleSheet.cssRules[2].style.setProperty("background-color", "skyblue");
//
console.log(styleSheet.cssRules[2].style.getPropertyValue("background-color"));
//using css setProperty
styleSheet.cssRules[2].style.setProperty("max-inline-size", "65rem");
// could also use this way
// styleSheet.cssRules[2].style.maxInlineSize="65rem";

console.log(styleSheet.cssRules[2].style.getPropertyValue("max-inline-size"));
