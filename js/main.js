/*
 *    main.js
 *
 *  43- Making  chart dynamic
 */

const margin = { left: 80, right: 20, top: 50, bottom: 100 };

const width = 600 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;
// this is in the global scope
let flag = true;

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
// create a constiable for the y lable so that we can updated it with the name
const yLabel = g
  .append("text")
  .attr("y", -60)
  .attr("x", -(height / 2))
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .text("Revenue");

d3.json("data/revenues.json").then((data) => {
  console.log(data);

  // Clean data
  data.forEach((d) => {
    // turn both the revenue and profit strings into numbers
    d.revenue = +d.revenue;
    d.profit = +d.profit;
  });

  d3.interval(() => {
    update(data);
    // set flag to true if it is currently false, if false set it to true
    flag = !flag;
  }, 1000);

  // Run the vis for the first time
  update(data);
});

function update(data) {
  // flag value will keep track of which data source is being looked at
  // when flag is set to true use rev data when false use profit data
  // ternary operator for if else
  // whatever is on the left hand side of the ? should evaluate to true or false
  // if it is true it returns the value to the left of the colon,
  //if it is false it returns the value to the right of the colon
  const value = flag ? "revenue" : "profit";

  x.domain(
    data.map((d) => {
      return d.month;
    })
  );
  y.domain([
    0,
    d3.max(data, (d) => {
      // replace hard coded revenue with the value constiable.

      return d[value];
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
  const rects = g
    .selectAll("rect")
    .data(data)

    /////////////////////////////// Most DRY
    //   // https://stackoverflow.com/questions/55397871/how-to-fix-join-is-not-a-function-when-trying-join-after-selectall
    // .join("rect") - had to remove join and use enter().append instead
    .enter()
    .append("rect")
    .attr("fill", "grey")
    .attr("y", (d) => {
      return y(d[value]);
    })
    .attr("x", (d) => {
      return x(d.month);
    })
    .attr("height", (d) => {
      function update(data) {
        // flag value will keep track of which data source is being looked at
        // when flag is set to true use rev data when false use profit data
        // ternary operator for if else
        // whatever is on the left hand side of the ? should evaluate to true or false
        // if it is true it returns the value to the left of the colon,
        //if it is false it returns the value to the right of the colon
        const value = flag ? "revenue" : "profit";

        x.domain(
          data.map((d) => {
            return d.month;
          })
        );
        y.domain([
          0,
          d3.max(data, (d) => {
            // replace hard coded revenue with the value constiable.

            return d[value];
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
        const rects = g
          .selectAll("rect")
          .data(data)

          /////////////////////////////// Most DRY
          //   // https://stackoverflow.com/questions/55397871/how-to-fix-join-is-not-a-function-when-trying-join-after-selectall
          // .join("rect") - had to remove join and use enter().append instead
          .enter()
          .append("rect")
          .attr("fill", "grey")
          .attr("y", (d) => {
            return y(d[value]);
          })
          .attr("x", (d) => {
            return x(d.month);
          })
          .attr("height", (d) => {
            return height - y(d[value]);
          })
          .attr("width", x.bandwidth);

        // change the value of the y label dependig upon what thre flag says
        const label = flag ? "Revenue" : "Profit";
        yLabel.text(label);
      }
    })
    .attr("width", x.bandwidth);

  // change the value of the y label dependig upon what thre flag says
  const label = flag ? "Revenue" : "Profit";
  yLabel.text(label);
}
