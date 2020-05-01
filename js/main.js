/*
*    main.js
*     
* 45 Scatter plots in D3 - 
to make the bar chart into scatter plot 
1) switch out rect to circle
2) change x and y to cy and cy 
3) remove hight and widith replace with radius of 5 
4) add 1/2 of the x.bandwith to fix the positioning of the x axis

To make it a bubble chart change the size of the circle based on the value given to it 
*/

const margin = { left: 80, right: 20, top: 50, bottom: 100 };

const width = 600 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

let flag = true;

const t = d3.transition().duration(750);

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
const yLabel = g
  .append("text")
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
    d.profit = +d.profit;
  });

  d3.interval(() => {
    const newData = flag ? data : data.slice(1);

    update(newData);
    flag = !flag;
  }, 1000);

  // Run the vis for the first time
  update(data);
});

function update(data) {
  const value = flag ? "revenue" : "profit";

  x.domain(
    data.map((d) => {
      return d.month;
    })
  );
  y.domain([
    0,
    d3.max(data, (d) => {
      return d[value];
    }),
  ]);

  // X Axis
  const xAxisCall = d3.axisBottom(x);
  xAxisGroup.transition(t).call(xAxisCall);

  // Y Axis
  const yAxisCall = d3.axisLeft(y).tickFormat((d) => {
    return "$" + d;
  });
  yAxisGroup.transition(t).call(yAxisCall);

  //   to make the bar chart into scatter plot
  // 1) switch out rect to circle
  // 2) change x and y to cy and cy
  // 3) remove hight and widith replace with radius of 5
  //4) add 1/2 of the x.bandwith to fix the positioning of the x axis

  // JOIN new data with old elements.
  const rects = g.selectAll("circle").data(data, (d) => {
    return d.month;
  });

  // EXIT old elements not present in new data.
  rects.exit().attr("fill", "red").transition(t).attr("cy", y(0)).remove();

  // ENTER new elements present in new data...
  rects
    .enter()
    .append("circle")
    .attr("fill", "grey")
    .attr("cy", y(0))
    .attr("cx", (d) => {
      return x(d.month) + x.bandwidth() / 2;
    })
    .attr("r", 5)
    // AND UPDATE old elements present in new data.
    .merge(rects)
    .transition(t)
    .attr("cx", (d) => {
      return x(d.month) + x.bandwidth() / 2;
    })
    .attr("cy", (d) => {
      return y(d[value]);
    });

  const label = flag ? "Revenue" : "Profit";
  yLabel.text(label);
}
