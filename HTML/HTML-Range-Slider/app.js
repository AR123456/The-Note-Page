const range = document.getElementById("range");
range.addEventListener("input", (e) => {
  // + makes this a number
  const value = +e.target.value;
  const label = e.target.nextElementSibling;
  //   getComputedStyle gets the width from the CSS
  //   target here is the input
  const range_width = getComputedStyle(e.target).getPropertyValue("width");
  const label_width = getComputedStyle(label).getPropertyValue("width");
  ////  this code moves the box along with the slider circle /////
  //   remove the px
  const num_width = +range_width.substring(0, range_width.length - 2);
  const num_label_width = +label_width.substring(0, label_width.length - 2);
  //   get min and max from HTML and make a number
  const max = +e.target.max;
  const min = +e.target.min;

  // put the value in the box
  label.innerHTML = value;
});
