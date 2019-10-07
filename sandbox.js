// store data in local storage
localStorage.setItem('name', 'mario');
localStorage.setItem('age', '50');

// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);

// deleting data from local storage - use the removeItem metod, pass in the key 
localStorage.removeItem('name');
// or take the nuclear approch and use the clear method to delete eveything in local storage 
localStorage.clear();

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age);


