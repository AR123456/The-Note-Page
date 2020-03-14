/////
// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
const [honda, tesla] = cars;
console.log(honda);
// const {
//   speedStats: { topSpeed: hondaTopSpeed }
// } = honda;
// const {
//   speedStats: { topSpeed: teslaTopSpeed }
// } = tesla;
// const {
//   coloursByPopularity: [hondaTopColour]
// } = honda;
// const {
//   coloursByPopularity: [teslaTopColour]
// } = tesla;
// const {
//   speedStats: { zeroToSixty: hondaTopZero }
// } = honda;
// const {
//   speedStats: { zeroToSixty: teslaTopZero }
// } = tesla;
const {
  speedStats: { topSpeed: hondaTopSpeed },
  coloursByPopularity: [hondaTopColour],
  speedStats: { zeroToSixty: hondaTopZero }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed },
  coloursByPopularity: [teslaTopColour],
  speedStats: { zeroToSixty: teslaTopZero }
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
      <th>Zero to Sixty</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
      <td>{teslaTopZero}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
      <td>{hondaTopZero}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
