// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
// const range = document.getElementById("range");

// range.addEventListener("input", (e) => {
//   const value = +e.target.value;
//   //   get the label from the div
//   const label = e.target.nextElementSibling;
//   // put the value in the dom
//   label.innerHTML = value;
//   // use the scale function (see val-with-thumb in palooza ) for amount of fill in the label circle
// });
const input = document.querySelector("input");
const indicator = document.querySelector(".indicator");
const output = document.querySelector("output");
input.addEventListener("input", (e) => {
  setValue(e.target.value);
});

function setValue(val) {
  output.value = val;
  indicator.setAttribute(
    "style",
    `
    --completion: ${val}%
  `
  );
}
