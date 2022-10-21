const styleSheets = document.styleSheets;

const styleSheetsArray = Array.from(styleSheets);
const targetSheet = styleSheetsArray.find((styleSheet) => {
  if (styleSheet?.href) {
    const pathName = new URL(styleSheet.href).pathname.split("/").pop();
    if (pathName === "extra.css") {
      return styleSheet;
    }
  }
});
// style sheets list interface
// cons loging out some of it
// cssRules property
// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/cssRules
console.log(targetSheet);
console.log(targetSheet.cssRules);
console.log(targetSheet.cssRules[0]);
console.log(targetSheet.cssRules[0].cssText);
console.log(targetSheet.cssRules[0].style);
console.log(targetSheet.cssRules[0].style.transition);
