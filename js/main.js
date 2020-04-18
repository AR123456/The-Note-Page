/*
 Band scales - used to space out rectangles in bar charts- 
*/

var svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", "400")
  .attr("height", "400");

d3.json("data/buildings.json").then(function (data) {
  console.log(data);

  data.forEach(function (d) {
    d.height = +d.height;
  });
  // changing x scale width - need to make the bands more narrow or the SVG bigger for all to fit
  // descrete domain, continuous range
  var x = d3
    // space out bands of equal length based on how many elements it has in its domain
    // cannot add new values in the same way as ordinal scale
    .scaleBand()
    // categories to display for domain - needed to add to building.json and here in the domain
    .domain([
      "Burj Khalifa",
      "Shanghai Tower",
      "Abraj Al-Bait Clock Tower",
      "Ping An Finance Centre",
      "Lotte World Tower",
      "One World Trade Center",
      "Guangzhou CTF Finance Center",
    ])
    // the pixle postions that we want chart spaced over
    // span of SVG
    .range([0, 400])
    // padding ratio inbetween the bars in the domain -
    .paddingInner(0.3)
    // padding ratio the outside edge of the whole domain
    .paddingOuter(0.3);
  console.log(x("Burj Khalifa"));
  var y = d3.scaleLinear().domain([0, 828]).range([0, 400]);

  var rects = svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("y", 0)
    // return the value from passing the building name into the x scale
    .attr("x", function (d) {
      return x(d.name);
    })
    // bandwidth  method gives access to width of bands
    .attr("width", x.bandwidth)
    .attr("height", function (d) {
      return y(d.height);
    })
    .attr("fill", function (d) {
      return "grey";
    });
});
