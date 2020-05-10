/*
 *    main.js
 *  47- Gapminder Clone - clone of bubble chart that shows how
 * population, per capita and life expectancy have changed in different countries over the past 2 centurys
 * // data is an array of years and an array of countries in that year. Each countrie contains its continent,
 * income, life expecnacy and population.
 * 1) update data in cycle based on year
 * 2)Size of cicles changes to reflect population, position on x is GDP Per Capita and postion
 * on Y is life expectancy
 * 3) y axis is a log scale 400 to 40,000
 * 4) ordinal scale to seperate the circles by their continent
 */

// const margin = { left: 80, right: 20, top: 50, bottom: 100 };
const height = 350,
  width = 700;
// console.log(height);
// console.log(width);
// console.log(margin);
const g = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", width + 100)
  .attr("height", height + 150)
  .append("g")
  .attr("transform", "translate(" + 80 + ", " + 50 + ")");

let time = 0;

// Scales
const x = d3.scaleLog().base(10).range([0, width]).domain([142, 150000]);
const y = d3.scaleLinear().range([height, 0]).domain([0, 90]);
const area = d3
  .scaleLinear()
  .range([25 * Math.PI, 1500 * Math.PI])
  .domain([2000, 1400000000]);
const continentColor = d3.scaleOrdinal(d3.schemePastel1);

// Labels
const xLabel = g
  .append("text")
  .attr("y", height + 50)
  .attr("x", width / 2)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .text("GDP Per Capita ($)");
const yLabel = g
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", -40)
  .attr("x", -170)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .text("Life Expectancy (Years)");
const timeLabel = g
  .append("text")
  .attr("y", height - 10)
  .attr("x", width - 40)
  .attr("font-size", "40px")
  .attr("opacity", "0.4")
  .attr("text-anchor", "middle")
  .text("1800");

// X Axis
const xAxisCall = d3
  .axisBottom(x)
  .tickValues([400, 4000, 40000])
  .tickFormat(d3.format("$"));
g.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxisCall);

// Y Axis
const yAxisCall = d3.axisLeft(y).tickFormat((d) => {
  return +d;
});
g.append("g").attr("class", "y axis").call(yAxisCall);

d3.json("data/data.json").then((data) => {
  // console.log(data);

  // Clean data
  const formattedData = data.map((year) => {
    return year["countries"]
      .filter((country) => {
        const dataExists = country.income && country.life_exp;
        return dataExists;
      })
      .map((country) => {
        country.income = +country.income;
        country.life_exp = +country.life_exp;
        return country;
      });
  });

  // Run the code every 0.1 second
  d3.interval(() => {
    // At the end of our data, loop back
    time = time < 214 ? time + 1 : 0;
    update(formattedData[time]);
  }, 1000);

  // First run of the visualization
  update(formattedData[0]);
});

function update(data) {
  // Standard transition time for the visualization
  const t = d3.transition().duration(100);

  // JOIN new data with old elements.
  const circles = g.selectAll("circle").data(data, (d) => {
    return d.country;
  });

  // EXIT old elements not present in new data.
  circles.exit().attr("class", "exit").remove();

  // ENTER new elements present in new data.
  circles
    .enter()
    .append("circle")
    .attr("class", "enter")
    .attr("fill", (d) => {
      return continentColor(d.continent);
    })
    .merge(circles)
    .transition(t)
    .attr("cy", (d) => {
      return y(d.life_exp);
    })
    .attr("cx", (d) => {
      return x(d.income);
    })
    .attr("r", function (d) {
      return Math.sqrt(area(d.population) / Math.PI);
    });

  // Update the time label
  timeLabel.text(+(time + 1800));
}
