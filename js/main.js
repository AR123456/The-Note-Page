/*
Axes and labels 
 to get axes on bottom and right of graph need to use translation on group
 this is due to the SVG point of origin being left top so 
to get the axes on the bottom and right attach axis to a group and give it a translation 
to get axes on right shift by the width of the vis in the x direction 
1) make call to axis generator 
2) pass in hte relative scale as its only argument
3) attach an svg group, give tranlation if neccessary
4) use call method to run the axis generated 
5) methods to customize how text should look
*/
// add 50 px to bottom so that text appears
const margin = { left: 100, right: 10, top: 10, bottom: 150 };
const width = 600 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;
// attach the axis to a group and give it a translation
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

// using this code to add title at bottom of the graph Y label
g.append("text")
  .attr("class", "y axis-label")
  .attr("x", -(height / 2))
  .attr("y", -60)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .text("Height (m)");

d3.json("data/buildings.json").then((data) => {
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
    .range([0, height]);
  // using d3 axisBottom generator for x scale- pass in x
  const xAxisCall = d3.axisBottom(x);
  // adding a group visualzation area for each axis
  g.append("g")
    .attr("class", "x axis")
    // for x translate by the hight of the visualization
    .attr("transform", "translate(0, " + height + ")")
    // need to call the generattor
    .call(xAxisCall)
    // here rotating the text on the x axis so it is readable
    .selectAll("text")
    .attr("y", "10")
    .attr("x", "-5")
    //lines the text up
    .attr("text-anchor", "end")
    // rotate takes one argument which is the num of deg to rotate
    .attr("transform", "rotate(-40)");

  // using d3 axisLeft generator for y scale pass in y
  const yAxisCall = d3
    .axisLeft(y)
    // hard code number of tick marks
    .ticks(3)
    // this is to show values with m after them
    .tickFormat((d) => {
      return d + "m";
    });
  // the y will be in the correct position so no need to translate it
  g.append("g")
    .attr("class", "y-axis")
    // need to call the generattor
    .call(yAxisCall);

  const rects = g.selectAll("rect").data(data);

  rects
    .enter()
    .append("rect")
    .attr("y", 0)
    .attr("x", function (d) {
      return x(d.name);
    })
    .attr("width", x.bandwidth)
    .attr("height", (d) => {
      return y(d.height);
    })
    .attr("fill", "grey");
});
