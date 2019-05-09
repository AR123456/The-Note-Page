// find first year in the data set ,
var minYear = d3.min(birthData, d => d.year);
//fixing the bounds on svg
var width = 600;
var height = 600;
//filter out data that is not from the first year in the set
var yearData = birthData.filter(d => d.year === minYear);
var continents = [];
// iterate data and generate a list of all continent codes
for (var i = 0; i < birthData.length; i++) {
  var continent = birthData[i].continent;
  //using indexOf to check for duplicate continents
  if (continents.indexOf(continent) === -1) {
    // push the non duplicates into the array
    continents.push(continent);
  }
}
// using d3 ordinal scale to associate each continent with a color
var colorScale = d3
  .scaleOrdinal()
  //domain is the continents
  .domain(continents)
  //using d3 colors schemes from the git hub repo that work with ordinal scales
  .range(d3.schemeCategory10);
// set up to center the SVG - so it is not cut off in the svg
d3.select("svg")
  //set height / width
  .attr("width", width)
  .attr("height", height)
  // append to group
  .append("g")
  // center it
  .attr("transform", "translate(" + width / 2 + " ," + height / 2 + ")")
  //give class of chart to be able to select later
  .classed("chart", true);
// pie chart Helper methods - instead of using path > which is very complicated
// arcs becomes an array of objects with birth data info, it points back to the data object from the original birth data array that is bound to this arc
// angles are in radiants 2 pi radians = 360 degrees -  the angle values can be used to draw chart
// need to take the objects and pass as string into the path element
var arcs = d3.pie().value(d => d.births)(yearData);
// created a fixed inner and outer radius based on the width of svg
var path = d3
  .arc()
  .outerRadius(width / 2 - 10)
  //radious of zero makes circle , a positive creates a donut shape
  .innerRadius(width / 4);
// used data method to bind arcs to the svg
//select the chart group created above
d3.select(".chart")
  // create empty selection of elements with class of arc
  .selectAll(".arc")
  .data(arcs)
  // append path with a class of arch
  .enter()
  .append("path")
  .classed("arc", true)
  //set fill based on continent
  .attr("fill", d => colorScale(d.data.continent))
  // give each arch a stroke color of black
  .attr("stroke", "black")
  // set the d attribute
  .attr("d", path);
