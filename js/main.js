var svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", "400")
  .attr("height", "400");

// var color = d3
//   .scaleOrdinal()
//   .domain([
//     "AFRICA",
//     "N. AMERICA",
//     "EUROPE",
//     "S. AMERICA",
//     "ASIA",
//     "AUSTRALASIA"
//   ])
//   .range(["RED", "ORANGE", "YELLOW", "GREEN", "BLUE", "INDIGO", "GREY"]);

// console.log(color("AFRICA"));
// console.log(color("N. AMERICA"));
// console.log(color("EUROPE"));
// console.log(color("S. AMERICA"));
// console.log(color("PANGAEA"));
var color = d3
  // use this to work with discrete data like a collection of categories
  // instead of continuous data
  // use case  to associate categories with different colors but it
  //could be used to associate any two strings with each other

  .scaleOrdinal()
  // domain and rage are always an array of values
  // the scale will provide a mapping between them based on that position in the array

  .domain([
    "AFRICA",
    "N. AMERICA",
    "EUROPE",
    "S. AMERICA",
    "ASIA",
    "AUSTRALASIA",
  ])
  // d3 has own functions to generate colors from the d3 scale chromatic module
  .range(d3.schemeCategory10);

console.log(color("AFRICA"));
console.log(color("N. AMERICA"));
console.log(color("EUROPE"));
console.log(color("S. AMERICA"));
// if a value is added to the domain D3 adds it to the range using next avalible
// if there are more values in domain than range the scale will loop back and start at the begining
console.log(color("PANGAEA"));
