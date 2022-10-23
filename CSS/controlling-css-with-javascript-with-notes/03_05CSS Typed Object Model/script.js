const styleSheet = document.styleSheets[0];
// assinging to a var- its a string as are other css
let headingOpacity = styleSheet.cssRules[2].style.opacity;

console.log(headingOpacity);
// manipulate with math  this concatonates so will not work !
headingOpacity = headingOpacity + 0.2;
console.log(headingOpacity);
//new Typed CSS Object Model- only works in chrome right now
// https://developer.mozilla.org/en-US/docs/Web/API/CSS_Typed_OM_API
//
// console.log(styleSheet.cssRules[2]);
let typedHeadingOpacity = styleSheet.cssRules[2].styleMap.get("opacity").value;
console.log(typedHeadingOpacity);
console.log(typeof typedHeadingOpacity);
typedHeadingOpacity = typedHeadingOpacity + 0.2;
console.log(typedHeadingOpacity);
