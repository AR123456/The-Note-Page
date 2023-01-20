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
  // const row = document.createElement("tr");
  const trFirst = document.createElement("tr");

  tblHeader.innerHTML = `
            <tr>  
            <th>Years ${years}</th>
            <th>Contributing ${monthlySaved}</th>
            <th>Contributing ${ppmt} to get to goal</th> 
            </tr>`;
  trFirst.innerHTML = `<tr>  
            <td></td>
            <td>$${growthByYear[0]} Starting Balance</td>
            <td>$${growthByYearNeededToBeSaved[0]} Starting Balance</td> 
            </tr>`;
  // creating all cells
  for (let i = 1; i < yearsToGrow.length; i++) {
    // creates a table row
    const row = document.createElement("tr");

    let trs = `<tr>  
              <td>Years ${yearsToGrow[i]}</td>
              <td>Contributing ${growthByYear[i]}</td>
              <td>Contributing ${growthByYearNeededToBeSaved[i]} to get to goal</td> 
              </tr>`;

    row.innerHTML = trs;
    // row.insertAdjacentHTML(beforebegin, trFirst);
    tblBody.prepend(trFirst);
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
function generateResultSummary() {
  // create the main table elemenst
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");
  const tblHeader = document.createElement("thead");
  const tblFooter = document.createElement("tfoot");
  //  add to elements
  tblHeader.innerHTML = `
  <tr>
      <th>Result Summary</th>
  </tr>

`;
  tblBody.innerHTML = `<tr>  
  <td>Savings goal </td>
  <td> ${goal}</td>
  </tr>
  <tr>  
  <td>Target years to save </td>
  <td> ${years}</td>
   </tr>
  <tr>  
  <td>Amount currently saved </td> 
  <td> ${currentSaved}</td> 
   </tr>
  <tr>  
  <td>Expected rate of return</td>
   <td> ${rate}</td>
    </tr>
  <tr>  
  <td>Inflation rate  </td>
    <td> ${expectedInflation}</td>
     </tr>
  <tr>  
  <td>Total after 10 years </td>
    <td> ${expectedInflation}</td>
     </tr>
  <tr>  
  <td>Amount required to meet goal in ${years} years</td>
    <td> ${ppmt} monthly</td>
     </tr>
  `;
  tblFooter.innerHTML = `The table footer `;

  // put tblHeader into the table
  tbl.appendChild(tblHeader);
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  tbl.appendChild(tblFooter);
  // appends <table> into <body>
  document.body.appendChild(tbl);
}
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces

// snipit from Brads https://www.youtube.com/watch?v=JaMCxVWtW58&t=2s
