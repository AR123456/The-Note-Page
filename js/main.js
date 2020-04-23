/*
*rReverse y-scale, make rectangles sit on y vs hanging down and fiddling with the SVG coordinate system

*/

const margin = { left: 100, right: 10, top: 10, bottom: 150 };

const width = 600 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

const g = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

// X Label
g.append("text")
  .attr("class", "x axis-label")
  .attr("x", width / 2)
  .attr("y", height + 140)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .text("The word's tallest buildings");

// Y Label
g.append("text")
  .attr("class", "y axis-label")
  .attr("x", -(height / 2))
  .attr("y", -60)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .text("Height (m)");

d3.json("data/buildings.json").then((data) => {
  console.log(data);

  data.forEach((d) => {
    d.height = +d.height;
  });

  const x = d3
    .scaleBand()
    .domain(
      data.map((d) => {
        return d.name;
      })
    )
    .range([0, width])
    .paddingInner(0.3)
    .paddingOuter(0.3);

  const y = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(data, (d) => {
        return d.height;
      }),
    ])
    //reversing the range of linear scale so 0 maps to bottom of svg
    // instead of the top
    // .range([0, height]);
    .range([height, 0]);

  const xAxisCall = d3.axisBottom(x);
  g.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0, " + height + ")")
    .call(xAxisCall)
    .selectAll("text")
    .attr("y", "10")
    .attr("x", "-5")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-40)");

  const yAxisCall = d3
    .axisLeft(y)
    .ticks(3)
    .tickFormat((d) => {
      return d + "m";
    });
  g.append("g").attr("class", "y-axis").call(yAxisCall);

  const rects = g.selectAll("rect").data(data);

  rects
    .enter()
    .append("rect")
    // .attr("y", 0)
    .attr("y", (d) => {
      // shift bars to bottom of screen
      // set y attribute val to val from y scale
      return y(d.height);
    })
    .attr("x", (d) => {
      return x(d.name);
    })
    .attr("width", x.bandwidth)
    .attr("height", (d) => {
      // changing the height of the bars to hight of vis from y scale
      return height - y(d.height);
    })
    .attr("fill", "grey");
});
