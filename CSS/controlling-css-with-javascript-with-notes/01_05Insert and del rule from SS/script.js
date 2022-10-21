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
// injecting new rules into style sheet using javascript
console.log(targetSheet);
//https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule
// inject at index 1
targetSheet.insertRule(".animals li a {border-color: green}", 1);
// remove rule from stylesheet using javascript
//https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/deleteRule
// pass in index of rule to be deleted from the style sheet object
targetSheet.deleteRule(0);
