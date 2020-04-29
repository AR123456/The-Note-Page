/*
 *    main.js
 *   Adding an update function
 */

const margin = { left: 80, right: 20, top: 50, bottom: 100 };

const width = 600 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

const g = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");
// the append  of the axis should only happen once here not in the loop
const xAxisGroup = g
  .append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")");
// the append  of the axis should only happen once here not in the loop
const yAxisGroup = g.append("g").attr("class", "y axis");

// X Scale
// this part of the scale is not dependant on the data changing so stays out of the update function
const x = d3.scaleBand().range([0, width]).padding(0.2);

// Y Scale
// this part of the scale is not dependant on the data changing so stays out of the update function
const y = d3.scaleLinear().range([height, 0]);

// X Label
g.append("text")
  .attr("y", height + 50)
  .attr("x", width / 2)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .text("Month");

// Y Label
g.append("text")
  .attr("y", -60)
  .attr("x", -(height / 2))
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .text("Revenue");

d3.json("data/revenues.json").then((data) => {
  // console.log(data);

  // Clean data
  data.forEach((d) => {
    d.revenue = +d.revenue;
  });

  d3.interval(() => {
    update(data);
  }, 1000);

  // Run the vis for the first time so there is not a one second delay after the page initaly loads
  update(data);
});
// the update function will be run repeatadly
// it takes in the data array loaded previously - put call of this function in the interval loop
function update(data) {
  // the only part of the scales that is dependent on update data is the domains so leaving it here
  //x scale
  x.domain(
    data.map((d) => {
      return d.month;
    })
  );
  // y scale
  y.domain([
    0,
    d3.max(data, (d) => {
      return d.revenue;
    }),
  ]);

  // X Axis - the call part of the axis generator needs to happen here in the update function
  const xAxisCall = d3.axisBottom(x);
  xAxisGroup.call(xAxisCall);

  // Y Axis -the call part of the axis generator needs to happen here in the update function
  const yAxisCall = d3.axisLeft(y).tickFormat((d) => {
    return "$" + d;
  });
  yAxisGroup.call(yAxisCall);

  /*    // Bars
    const rects = g.selectAll("rect")
        .data(data)
        
    rects.enter()
        .append("rect")
            .attr("y", function(d){ return y(d.revenue); })
            .attr("x", function(d){ return x(d.month) })
            .attr("height", function(d){ return height - y(d.revenue); })
            .attr("width", x.bandwidth)
            .attr("fill", "grey");*/
}
