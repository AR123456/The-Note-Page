// https://d3js.org/getting-started#d3-in-vanilla-html

// Declare the chart dimensions and margins. the pixel area or canvas size
const width = 640;
const height = 400;
const marginTop = 20;
const marginRight = 20;
const marginBottom = 30;
const marginLeft = 40;

// Declare the x (horizontal position) scale.
const x = d3
  //   time scale
  .scaleUtc()
  .domain([new Date("2023-01-01"), new Date("2024-01-01")])
  .range([marginLeft, width - marginRight]);

// Declare the y (vertical position) scale.  The scale on the left
const y = d3
  .scaleLinear()
  //  the input values of the data set will span 0 to 100
  .domain([0, 100])
  // range of pixels starting at the bottom of the canvas less the margin at the bottom
  // to the top minus the margin at the top
  // range is inverted mathematically. it goes from a hight value to low value because you
  // want the output range to be like a thermometer higher values upwards. But the Y axis on an
  // SVG canvas and most graphic drawing things goes the other way.
  // (the higher the Y value the lower you are)

  .range([height - marginBottom, marginTop]);

// Create the SVG container.
const svg = d3.create("svg").attr("width", width).attr("height", height);

// Add the x-axis.
svg
  .append("g")
  .attr("transform", `translate(0,${height - marginBottom})`)
  .call(d3.axisBottom(x));

// Add the y-axis.
svg
  .append("g")
  .attr("transform", `translate(${marginLeft},0)`)
  .call(d3.axisLeft(y));

document.getElementById("container").append(svg.node());
