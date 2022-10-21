const heading = document.querySelector(".masthead h1");
// computed styles are what has been applied by all means
// can get this in dev tools  or here with JS using getComputedStu;e
// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle

const computedStyles = window.getComputedStyle(heading);
// dig into the massive object returned
// the JS Name
console.log(computedStyles.fontSize);
//with getPropertyValue - an array like object
//https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue
// the CSS name
// pass in the CSS property in parens - use actual name here
console.log(computedStyles.getPropertyValue("font-size"));
