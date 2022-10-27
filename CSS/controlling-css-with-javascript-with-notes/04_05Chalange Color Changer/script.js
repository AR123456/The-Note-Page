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

const currentColors = window.getComputedStyle(colorSwatch);

hue.addEventListener("input", () => {
  console.log(hue.value);
  // property name and the value
  rootRules.style.setProperty("--hue", hue.value);
  console.log(currentColors.getPropertyValue("--hue"));
  colorSwatch.innerHTML = `hsla(${currentColors.getPropertyValue(
    "--hue"
  )}, ${currentColors.getPropertyValue(
    "--saturation"
  )}%, ${currentColors.getPropertyValue(
    "--lightness"
  )}%, ${currentColors.getPropertyValue("--alpha")});`;
  console.log(colorSwatch.innerHTML);
});
saturation.addEventListener("input", () => {
  console.log(saturation.value);
});
lightness.addEventListener("input", () => {
  console.log(lightness.value);
});
alpha.addEventListener("input", () => {
  parseInt(alpha.value) / 100;
  console.log(alpha.value);
  console.log(parseInt(alpha.value) / 100);
});
// console.log(window.getComputedStyle(colorSwatch));
