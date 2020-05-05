/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    5.4 - The D3 update pattern -
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

const xAxisGroup = g
  .append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")");

const yAxisGroup = g.append("g").attr("class", "y axis");

// X Scale
const x = d3.scaleBand().range([0, width]).padding(0.2);

// Y Scale
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

  // Run the vis for the first time
  update(data);
});

function update(data) {
  x.domain(
    data.map((d) => {
      return d.month;
    })
  );
  y.domain([
    0,
    d3.max(data, (d) => {
      return d.revenue;
    }),
  ]);

  // X Axis
  const xAxisCall = d3.axisBottom(x);
  xAxisGroup.call(xAxisCall);

  // Y Axis
  const yAxisCall = d3.axisLeft(y).tickFormat((d) => {
    return "$" + d;
  });
  yAxisGroup.call(yAxisCall);

  // JOIN new data with old elements.
  const rects = g.selectAll("rect").data(data);

  // EXIT old elements not present in new data.
  rects.exit().remove();

  // UPDATE old elements present in new data.
  rects
    .attr("y", (d) => {
      return y(d.revenue);
    })
    .attr("x", (d) => {
      return x(d.month);
    })
    .attr("height", (d) => {
      return height - y(d.revenue);
    })
    .attr("width", x.bandwidth);

  // ENTER new elements present in new data.
  rects
    .enter()
    .append("rect")
    .attr("y", (d) => {
      return y(d.revenue);
    })
    .attr("x", (d) => {
      return x(d.month);
    })
    .attr("height", (d) => {
      return height - y(d.revenue);
    })
    .attr("width", x.bandwidth)
    .attr("fill", "grey");
}
