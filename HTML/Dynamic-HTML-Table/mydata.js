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

// Buttons
