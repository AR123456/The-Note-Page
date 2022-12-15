// looking at using Javascript to generate slider marks
// https://codepen.io/viestursm/pen/BayEjaN
function init() {
  // getting slider to pass into the functions that control appearance and behavior
  // each range input has the class tick-slider-input
  const sliders = document.getElementsByClassName("tick-slider-input");
  // when the page loads use the default values to set up sliders
  for (let slider of sliders) {
    slider.oninput = onSliderInput;
    updateProgress(slider);
    setTicks(slider);
  }
}
// when range handle is moved pass in that event to update the slider
function onSliderInput(event) {
  //event.target is input#weightSlider.tick-slider-input

  updateProgress(event.target);
}

// updateProgress used to display handle on track green vs black
function updateProgress(slider) {
  let progress = document.getElementById(slider.dataset.progressId);
  const percent = getSliderPercent(slider);
  progress.style.width = percent * 100 + "%";
}
// this is getting the position of the handle relative to its range
function getSliderPercent(slider) {
  //slider AKA event.target.value
  // console.log(event.target.value);

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
    let tick = document.createElement("span");
    tick.className = "tick-slider-tick";
    container.appendChild(tick);
  }
}

window.onload = init;
