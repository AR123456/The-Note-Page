var svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", "400")
  .attr("height", "400");

var x = d3
  // time scales are a type of linear scale
  // domain works with the JS date object instead of integers
  // syntax is like that of a linear scale
  .scaleTime()
  // create a new date object here by passing in the day time and month we want
  // to do this with with actual data would need to convert a string of the date to a javascript date object
  .domain([new Date(2000, 0, 1), new Date(2001, 0, 1)])
  .range([0, 400]);

console.log(x(new Date(2000, 7, 1)));
console.log(x(new Date(2000, 2, 1)));
console.log(x(new Date(2000, 10, 25)));

console.log(x.invert(232.8));
console.log(x.invert(66.5));
console.log(x.invert(360));
