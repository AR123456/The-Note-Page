const styleSheet = document.styleSheets[0];
// can user CRUD like operations on the style sheet interface
// properties and rules --CRUD
// Ruleset text before:
console.log(styleSheet.cssRules[2].cssText);

styleSheet.cssRules[2].style.setProperty("background-color", "skyblue");
console.log(styleSheet.cssRules[2].style.getPropertyValue("background-color"));
styleSheet.cssRules[2].style.setProperty("max-inline-size", "65rem");
console.log(styleSheet.cssRules[2].style.getPropertyValue("max-inline-size"));
// D of crud remove this property
styleSheet.cssRules[2].style.removeProperty("margin-inline");

// Ruleset text after: -current live version as del by browser
console.log(styleSheet.cssRules[2].cssText);
