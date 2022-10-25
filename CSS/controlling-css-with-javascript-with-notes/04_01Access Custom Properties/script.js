const listItem = document.querySelector(".animals li:nth-child(6) a");
// can get custom property using getPropertyValue defined in line
console.log(listItem.style.getPropertyValue("--color"));
// this gets the custom property using getPropertyValue by traversing the style sheet
const styleSheet = document.styleSheets[0];
console.log(styleSheet.cssRules[0].style.getPropertyValue("--max-width"));
// there are no javascript camel case equevilants to custom properties so need to use getPropertyValue  not .style
