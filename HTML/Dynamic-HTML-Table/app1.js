// https://stackoverflow.com/questions/61497993/how-to-insert-array-values-into-a-html-table-with-javascript

//Array
var myData = [
  { name: "Micheal", age: 20, hometown: "New York", example: "extra" },
  { name: "Santino", age: 25, hometown: "Los Angeles", example: "extra" },
  { name: "Fredo", age: 29, hometown: "California", example: "extra" },
  { name: "Hagen", age: 28, hometown: "Long Beach", example: "extra" },
];

//get references to the table and the head and body:
const myTable = document.getElementById("myTable");
const myTable_header = myTable.querySelector("thead");
const myTable_body = myTable.querySelector("tbody");

//Insert data function
function Insert_Data() {
  //Help...... :
  myTable_header.innerHTML = "";
  var tr = document.createElement("tr");
  // getting the keys for the th row in the table header
  const headers_data = Object.keys(myData[0]);
  // looping position [0], get the key for dsplay in header row
  headers_data.forEach((key) => {
    var th = document.createElement("th");
    th.innerHTML = key;
    tr.appendChild(th);
  });
  myTable_header.appendChild(tr);
  // now loop to get data for each row
  // clear the innerHTML
  myTable_body.innerHTML = "";
  // do the for loop for each object in the  myData array
  for (let i = 0; i < myData.length; i++) {
    // create a row for each object in the array
    var tr = document.createElement("tr");
    // for each of the keys in said row
    headers_data.forEach((key) => {
      // create td elements for each key using its value
      var td = document.createElement("td");

      td.innerHTML = myData[i][key];
      tr.appendChild(td);
    });
    myTable_body.appendChild(tr);
  }
}
