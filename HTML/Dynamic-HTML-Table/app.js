const goal = 10000;
const years = 10;
const currentSaved = 1000;
const monthlySaved = 500;
const expectedReturn = 3;
const expectedInflation = 1;
const nper = years * 12;

const APR = expectedReturn / 100;
const rate = APR / nper;
const pmt = monthlySaved;
const pv = currentSaved;
const type = 0;
const fv = goal;
// years for chart
const yearsToGrow = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const growthByYear = [
  1000,
  "7011.26",
  "13040.58",
  "19088.01",
  "25153.61",
  "31237.43",
  "37339.53",
  "43459.96",
  "49598.78",
  "55756.04",
  "61931.80",
];
// growth by year using monthly payment needed to reach savings goal
const growthByYearNeededToBeSaved = [
  1000,
  "1905.20",
  "2813.12",
  "3723.77",
  "4637.16",
  "5553.29",
  "6472.17",
  "7393.81",
  "8318.22",
  "9245.41",
  "10175.38",
];
ppmt = 75.0;

//Show user needed monthly contribution
//   const Ppmt = parseFloat(
//     PMT(rate, nper, pv, fv, type) - IPMT(pv, pmt, rate, nper)
//   ).toFixed(2);
function generateTable() {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");
  const tblHeader = document.createElement("thead");
  const row = document.createElement("tr");

  tblHeader.innerHTML = `
<tr>  
<th>Years ${years}</th>
<th>Contributing ${monthlySaved}</th>
<th>Contributing ${ppmt} to get to goal</th> 
</tr>`;

  // creating all cells
  for (let i = 0; i < yearsToGrow.length; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < 3; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      const cellText = document.createTextNode(
        `Year ${yearsToGrow[i]}, growthByYear ${growthByYear[i]}, growthByYearNeededToBeSaved ${growthByYearNeededToBeSaved[i]}`
      );
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  // put tblHeader into the table
  tbl.appendChild(tblHeader);
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
}
