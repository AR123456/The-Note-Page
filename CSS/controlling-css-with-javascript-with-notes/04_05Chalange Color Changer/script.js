const hue = document.querySelector("#hue");
const saturation = document.querySelector("#saturation");
const lightness = document.querySelector("#lightness");
const alpha = document.querySelector("#alpha");
const colorSwatch = document.querySelector(".color-swatch");

const rootRules = document.styleSheets[0].cssRules[0];
// task
// get value of each slider and apply to background
// display the HSLA in the box
// change the saturation and lightness alpha appropriately
/////
// capture inputs from four selectors
// set custom property value based on input
// change color swatch background color to match input
// change color swatch text to display current HSLA value
// make text readable across all color options

window.CSS.registerProperty({
  name: "--hue",
  syntax: "<integer>",
  inherits: false,
  initialValue: "20",
});

hue.addEventListener("change", () => {
 
  console.log(hue.value);
});
saturation.addEventListener("change", () => {
  console.log(saturation.value);
});
lightness.addEventListener("change", () => {
  console.log(lightness.value);
});
alpha.addEventListener("change", () => {
  console.log(alpha.value);
});
