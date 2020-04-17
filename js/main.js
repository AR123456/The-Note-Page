var svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", "400")
  .attr("height", "400");

d3.json("data/buildings.json").then(function (data) {
  console.log(data);

  data.forEach((d) => {
    d.height = +d.height;
  });

  var y = d3
    // use log scale to display data with large changes in value
    // does better job displaying the diff in values
    //scaleLog takes in min and max values for domain and range
    // the domain of a log scale needs to be either strictly negative or positive
    // the log of 0 is always undefined
    // 0 cannot be in the domain
    .scaleLog()
    .domain([28, 828])
    .range([0, 200])
    // base value defaults to 10
    // this would place values a factor of 10 apart
    // a log scale with a base of 1 is the same as a linear scale
    .base(10);
  console.log(y(5440));

  var rects = svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("y", 0)
    .attr("x", function (d, i) {
      return i * 60;
    })
    .attr("width", 40)
    .attr("height", function (d) {
      return y(d.height);
    })
    .attr("fill", function (d) {
      return "grey";
    });
});
