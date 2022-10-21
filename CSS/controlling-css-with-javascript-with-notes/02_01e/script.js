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

console.log(targetSheet);
//go to specific style decloration or rule
// in the extra.css file 0 is the first rule here changing that with JS by adding a background color and border radis
// using .style is like it is used for in line styling, here using it to inject style with js
// have to use camel case with no - in JS  for CSS properties that contain a -
targetSheet.cssRules[0].style.backgroundColor = "hsl(120, 57%, 20%)";
// can add new or over ride
targetSheet.cssRules[0].style.borderRadius = "1rem";
