// ///////////////  syncing inputs
// getting range and text inputs
const sliderGoal = document.getElementById("savingsRange");
const inputGoal = document.getElementById("savingsInput");
function syncInputs() {
  // https://stackoverflow.com/questions/64199456/changing-the-value-of-the-range-slider-and-input-box-at-the-same-time

  sliderGoal.addEventListener("input", function () {
    inputGoal.value = this.value;
  });
  inputGoal.addEventListener("input", function () {
    sliderGoal.value = this.value;
  });

  // sliderYears.addEventListener("input", function () {
  //   inputYears.value = this.value;
  // });
  // inputYears.addEventListener("input", function () {
  //   sliderYears.value = this.value;
  // });
  // sliderCurrentSaved.addEventListener("input", function () {
  //   inputCurrentSaved.value = this.value;
  // });
  // inputCurrentSaved.addEventListener("input", function () {
  //   sliderCurrentSaved.value = this.value;
  // });
  // sliderMonthlySavings.addEventListener("input", function () {
  //   inputMonthlySavings.value = this.value;
  // });
  // inputMonthlySavings.addEventListener("input", function () {
  //   sliderMonthlySavings.value = this.value;
  // });
  // sliderExpectedRate.addEventListener("input", function () {
  //   inputExpectedRate.value = this.value;
  // });
  // inputExpectedRate.addEventListener("input", function () {
  //   sliderExpectedRate.value = this.value;
  // });
  // sliderInflationRate.addEventListener("input", function () {
  //   inputInflationRate.value = this.value;
  // });
  // inputInflationRate.addEventListener("input", function () {
  //   sliderInflationRate.value = this.value;
  // });
}
syncInputs();

// looking at using Javascript to generate slider marks
// https://codepen.io/viestursm/pen/BayEjaN
function init() {
  // get all the inputs - could this be changed to target  input[type="range"]
  const sliders = document.getElementsByClassName("tick-slider-input");

  // get the numeric text box inputs - doing this to try to get the value from the input box to update the progress bar
  //TODO

  for (let slider of sliders) {
    console.log(slider, inputGoal);
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
  // console.log(slider.dataset);

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
  // console.log(range);
  const absValue = slider.value - slider.min;
  // console.log(absValue);

  return absValue / range;
}

function setTicks(slider) {
  let container = document.getElementById(slider.dataset.tickId);
  const spacing = parseFloat(slider.dataset.tickStep);
  const sliderRange = slider.max - slider.min;
  const tickCount = sliderRange / spacing + 1; // +1 to account for 0

  for (let ii = 0; ii < tickCount; ii++) {
    // spans will be added to the div with class tick-slider-tick-containger
    let tick = document.createElement("span");

    tick.className = "tick-slider-tick";

    container.appendChild(tick);
  }
}

window.onload = init;
// window.addEventListener("resize", onResize);
