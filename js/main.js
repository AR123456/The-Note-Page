// scales are functions that map from an input domain to an output range

var svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", "400")
  .attr("height", "400");

d3.json("data/buildings.json").then(data => {
  console.log(data);

  data.forEach(d => {
    d.height = +d.height;
  });
  // convention is to name the const after the axis that it will apply to
  var y = d3
    // function d3.scaleLinear need 2 methods
    .scaleLinear()
    //domain method, takes in the vaule of the min and max of the domain
    // 0 to the height of the tallest building
    .domain([0, 828])
    //range method takes in the min and max of the range
    // the out put
    .range([0, 400]);

  var rects = svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("y", 0)
    .attr("x", (d, i) => {
      return i * 60;
    })
    .attr("width", 40)
    .attr("height", d => {
      // pass raw hight values into the scales function before returning
      // as value of the height attribute
      return y(d.height);
    })
    .attr("fill", d => {
      return "grey";
    });
});
