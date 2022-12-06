// looking at using Javascript to generate slider marks
// https://codepen.io/viestursm/pen/BayEjaN
function init() {
  // get all the inputs - could this be changed to target  input[type="range"]
  const sliders = document.getElementsByClassName("tick-slider-input");

  for (let slider of sliders) {
    slider.oninput = onSliderInput;
    updateProgress(slider);
    setTicks(slider);
  }
}
function onSliderInput(event) {
  // after first draw this updates what is green vs what is black
  updateProgress(event.target);
}
// this used to make color green to left and black to right changeing as slider moves
function updateProgress(slider) {
  // dataset object has all the data-  stuff defined on the input
  console.log(slider.dataset);
  // this is coming from the data-progress-id of each of the inputs
  let progress = document.getElementById(slider.dataset.progressId);
  const percent = getSliderPercent(slider);
  // TODO why is "%" needed here
  // what this ends up being is the % of the track that is green
  progress.style.width = percent * 100 + "%";
}
// using this to update slider black to green
function getSliderPercent(slider) {
  const range = slider.max - slider.min;
  const absValue = slider.value - slider.min;

  return absValue / range;
}

function setTicks(slider) {
  let container = document.getElementById(slider.dataset.tickId);
  const spacing = parseFloat(slider.dataset.tickStep);
  const sliderRange = slider.max - slider.min;
  const tickCount = sliderRange / spacing + 1; // +1 to account for 0

  for (let ii = 0; ii < tickCount; ii++) {
    // spans will be added to the div wiht class tick-slider-tick-containger
    let tick = document.createElement("span");

    tick.className = "tick-slider-tick";

    container.appendChild(tick);
  }
}

window.onload = init;
// window.addEventListener("resize", onResize);
