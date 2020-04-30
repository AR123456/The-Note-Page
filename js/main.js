/*

*43 - D3 Transitions
*/

const margin = { left: 80, right: 20, top: 50, bottom: 100 };

const width = 600 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

let flag = true;
// define the transiton function , keep it shorter than the loops delay
// pass this in where needed later
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
    // changing the data in the array depending on how the flag is set
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

  xAxisGroup
    // place the transiton before the xAxisCall call method
    .transition(t)
    .call(xAxisCall);

  // Y Axis
  const yAxisCall = d3.axisLeft(y).tickFormat((d) => {
    return "$" + d;
  });
  yAxisGroup
    // place the transiton before the xAxisCall call method
    .transition(t)
    .call(yAxisCall);

  // JOIN new data with old elements.
  // the data metod can take an optional second argument which should be a function
  // that returns a key to match items between different rates
  //so D3 knows how to associate each SVG with the right data point in the array based
  //on what the funciton returns
  // this function returns the month so data join tracks the items based on mo of value
  const rects = g.selectAll("rect").data(data, (d) => {
    return d.month;
  });

  // EXIT old elements not present in new data.
  rects
    .exit()
    // changing the color of the exiting bars to red
    .attr("fill", "red")
    // and add a transition
    .transition(t)
    // transition y value to the bottom of grid, y0 is pixle postion at bottom of the chart
    .attr("y", y(0))
    // slide hight away to 0
    .attr("height", 0)
    .remove();

  // ENTER new elements present in new data...
  rects
    .enter()
    .append("rect")
    .attr("fill", "grey")
    .attr("y", y(0))
    .attr("height", 0)
    .attr("x", (d) => {
      return x(d.month);
    })
    .attr("width", x.bandwidth)
    // AND UPDATE old elements present in new data.
    // merge sets the attributes of the entering and update selection at same time
    //call on enter selection and pass in what to merg with
    // all attr above are called on just enter selection
    // the attr below the merge are applied to enter and update selections
    .merge(rects)
    // add the transistion before any attrbutes get set
    .transition(t)
    .attr("x", (d) => {
      return x(d.month);
    })
    .attr("width", x.bandwidth)
    .attr("y", (d) => {
      return y(d[value]);
    })
    .attr("height", (d) => {
      return height - y(d[value]);
    });

  const label = flag ? "Revenue" : "Profit";
  yLabel.text(label);
}
