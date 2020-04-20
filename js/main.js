/*
 D3 min, max, and extent
 used to automaicaly set the domain for scales - may not always know the min and max in a
 set of data
 map functions to set domains for catigorical data 
 min max and extend all take in 2 arguments - 
 an array of data and a callback function 
 the callback function will loop over every item in the array 
 for each item need to retun the piece of data we are intrested in 
 min max and extent will compare values and return relevant data 
 the min , max  and for extent an array of the min and max values 
*/

const svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", "400")
  .attr("height", "400");

d3.json("data/buildings.json").then((data) => {
  console.log(data);

  data.forEach((d) => {
    d.height = +d.height;
  });

  const x = d3
    .scaleBand()

    .domain(
      // map function to generate the array of building names
      // to add to the domain
      // useful for band scales and ordinal scales category values
      data.map((d) => {
        return d.name;
      })
    )
    //range method takes in the min and max of the range
    .range([0, 400])
    .paddingInner(0.3)
    .paddingOuter(0.3);

  const y = d3
    .scaleLinear()
    //domain method, takes in the vaule of the min and max of the domain
    // 0 to the height of the tallest building
    .domain([
      0,
      // d3 max takes in an array of data as its first argument
      // the second argument is pointing to the buildings height value
      // finds the max value in the array to use in the domain function
      d3.max(data, (d) => {
        return d.height;
      }),
    ])
    //range method takes in the min and max of the range
    .range([0, 400]);
  // .extent returns an array of the min and max vaule
  const rects = svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("y", 0)
    .attr("x", (d) => {
      return x(d.name);
    })
    .attr("width", x.bandwidth)
    .attr("height", (d) => {
      return y(d.height);
    })
    .attr("fill", "grey");
});
