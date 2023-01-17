function generateTable() {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblHead = document.createElement("thead");
  const tblBody = document.createElement("tbody");
  const row = document.createElement("tr");
  const rowTH = document.createElement("th");
  // create th head with header rows
  rowTH.innerHTML = `
  <th>${"Company"}</th>
  <th>${"Contact"}</th>
  <th>${"Country"}</th>
  <th><a href="#" class="btn btn-danger btn-sm delete">X</a></th>
`;
  tblHead.appendChild(rowTH);

  row.innerHTML = `
  <td>${"book.title"}</td>
  <td>${"book.author"}</td>
  <td>${"book.isbn"}</td>
  <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
`;
  tblBody.appendChild(row);
  // creating all cells
  for (let i = 0; i < 2; i++) {
    // creates a table row

    for (let j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
}

// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces

// snipit from Brads https://www.youtube.com/watch?v=JaMCxVWtW58&t=2s
