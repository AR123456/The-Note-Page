// looking at using Javascript to generate slider marks
// https://codepen.io/viestursm/pen/BayEjaN
function init() {
  // getting slider to pass into the functions that control appearance and behavior
  // each range input has the class tick-slider-input
  const sliders = document.getElementsByClassName("tick-slider-input");
  // when the page loads use the default values to set up sliders
  for (let slider of sliders) {
    slider.oninput = onSliderInput;
    updateValue(slider);

    // updateLabels(slider);
    updateProgress(slider);
    setTicks(slider);
  }
}
// when range handle is moved pass in that event to update the slider
function onSliderInput(event) {
  //event.target is input#weightSlider.tick-slider-input
  updateValue(event.target);
  // updateLabels(event.target);
  updateProgress(event.target);
}

function updateValue(slider) {
  // coming from input value using data-value-id
  // dataset is on the event (slider) object
  let value = document.getElementById(slider.dataset.valueId);

  // the value above the handle
  value.innerHTML = "<div>" + slider.value + "</div>";
}

function updateLabels(slider) {
  // const value = document.getElementById(slider.dataset.valueId);
  // const minLabel = document.getElementById(slider.dataset.minLabelId);
  // const maxLabel = document.getElementById(slider.dataset.maxLabelId);
  // const valueRect = value.getBoundingClientRect();
  // const minLabelRect = minLabel.getBoundingClientRect();
  // const maxLabelRect = maxLabel.getBoundingClientRect();
  // const minLabelDelta = valueRect.left - minLabelRect.left;
  // const maxLabelDelta = maxLabelRect.left - valueRect.left;
  // const deltaThreshold = 32;
  // if (minLabelDelta < deltaThreshold) minLabel.classList.add("hidden");
  // else minLabel.classList.remove("hidden");
  // if (maxLabelDelta < deltaThreshold) maxLabel.classList.add("hidden");
  // else maxLabel.classList.remove("hidden");
}

function updateProgress(slider) {
  let progress = document.getElementById(slider.dataset.progressId);
  const percent = getSliderPercent(slider);

  progress.style.width = percent * 100 + "%";
}
// this is getting the position of the handle relative to its range
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
    let tick = document.createElement("span");

    tick.className = "tick-slider-tick";

    container.appendChild(tick);
  }
}

window.onload = init;
