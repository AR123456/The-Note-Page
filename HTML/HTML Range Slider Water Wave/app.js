// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
const range = document.getElementById("range");

range.addEventListener("input", (e) => {
  const value = +e.target.value;
  //   get the label from the div
  const label = e.target.nextElementSibling;
  // put the value in the dom
  label.innerHTML = value;
});
