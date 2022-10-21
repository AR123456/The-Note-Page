const styleSheets = document.styleSheets;
console.log(styleSheets);

const styleSheetsArray = Array.from(styleSheets);
const targetSheet = styleSheetsArray.find((styleSheet) => {
  if (styleSheet?.href) {
    const pathName = new URL(styleSheet.href).pathname.split("/").pop();
    if (pathName === "extra.css") {
      return styleSheet;
    }
  }
});
console.log(targetSheet);
// now that we have the object can set it to disabled
//https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/disabled
// could be used if there are elements on page that do not need to be used uless they are active
// or if shipping a page with diffrent color schemes / layouts and the user can choose which to apply
// like dark mode

targetSheet.disabled = true;
