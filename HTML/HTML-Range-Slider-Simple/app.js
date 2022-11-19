const range = document.getElementById("range");
range.addEventListener("input", (e) => {
  // use + to make the value a number
  const value = +e.target.value;
  // label is the next element after the range
  const label = e.target.nextElementSibling;
  label.innerHTML = value;
  // make the position of the element follow the range
  // calculate the position of the label and have it follow the thumb
  // doing this with JS
});
