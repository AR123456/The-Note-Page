/*
 Margins and groups
 SVG Groups - an invisible SVG element for organizing data - using to get vis 
 to conform to D3 margin convention 
 margin is defined in main js - can use D3 axis generators
 attach to svg group element - use to bundle graphical elements together and apply transformations 

 Transformation    
 Translation 
Margins can give room for the x and y lables
*/
// defining margin as an object and passing in our values
const margin = { left: 100, right: 10, top: 10, bottom: 100 };
// this will define the size of the group that we are attaching everything to - wont include space for margins
// 600 x 400 less the margins
const width = 600 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;
// append the group to the canvas and center it
const g = d3
  .select("#chart-area")
  .append("svg")
  // removed hard coded values here and added what was defined above
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  // svg groups do not have any visusal presence by themselves ,
  //they are useful to group graphical elements together and apply transformations to many
  //shapes at once
  .append("g")
  // transform translates the data vis into the center -
  //shift to left by value of left margin and down by value of top margin
  .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

d3.json("data/buildings.json").then((data) => {
  // console.log(data);

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
  // this now gets appended to the group , not the svg
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
