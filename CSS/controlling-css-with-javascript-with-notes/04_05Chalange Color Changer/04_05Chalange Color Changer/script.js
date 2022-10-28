const hue = document.querySelector("#hue");
const saturation = document.querySelector("#saturation");
const lightness = document.querySelector("#lightness");
const alpha = document.querySelector("#alpha");
const colorSwatch = document.querySelector(".color-swatch");

const rootRules = document.styleSheets[0].cssRules[0];
// task

// capture inputs from four selectors
// set custom property value based on input
// change color swatch background color to match input
// change color swatch text to display current HSLA value
// make text readable across all color options

const currentColors = window.getComputedStyle(colorSwatch);
const updateDisplay = () => {
  colorSwatch.innerHTML = `hsla(${currentColors.getPropertyValue(
    "--hue"
  )}, ${currentColors.getPropertyValue(
    "--saturation"
  )}%, ${currentColors.getPropertyValue(
    "--lightness"
  )}%, ${currentColors.getPropertyValue("--alpha")});`;
};

hue.addEventListener("input", () => {
  rootRules.style.setProperty("--hue", hue.value);
  updateDisplay();
});
saturation.addEventListener("input", () => {
  rootRules.style.setProperty("--saturation", saturation.value);
  updateDisplay();
});
lightness.addEventListener("input", () => {
  rootRules.style.setProperty("--lightness", lightness.value);
  updateDisplay();
});
alpha.addEventListener("input", () => {
  alphaNew = parseInt(alpha.value) / 100;
  rootRules.style.setProperty("--alpha", alphaNew);
  updateDisplay();
});
// console.log(window.getComputedStyle(colorSwatch));
