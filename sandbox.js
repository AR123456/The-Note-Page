const todos = [
  { text: "play mariokart", author: "shaun" },
  { text: "buy some milk", author: "mario" },
  { text: "buy some bread", author: "luigi" }
];
// everything we store in local storage is ultimalty a string
// need to use the stringify method to send to local storage and parse to turn it back into a JSON object
// turn the array of objects "todos" into a JSON string to put it in local storage
// console.log(JSON.stringify(todos));
localStorage.setItem("todos", JSON.stringify(todos));

const stored = localStorage.getItem("todos");
// console.log(stored);

console.log(JSON.parse(stored));
