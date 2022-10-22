const styleSheet = document.styleSheets[0];
// this logs copy of what is in the style sheet - using this method from the javascript need to make the property camel case
console.log(styleSheet.cssRules[2].style.maxInlineSize);
// can target the individual properties in the rule - doing it this way using the getPropertyValue method can but the css rule in parens and keep the hyphens
// this is the most likely method used IRL
console.log(styleSheet.cssRules[2].style.getPropertyValue("max-inline-size"));
