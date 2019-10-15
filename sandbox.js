// sets - new data stuctue in the object category
//reference type
// allows storage of unique values
// in a given set a certain value can olny be present once
// have a different set of methods and propeties than arrays
const namesArray = ["ryu", "chun-li", "ryu", "shaun"];
console.log(namesArray);

// const namesSet = new Set(['ryu', 'chun-li', 'ryu', 'shaun']);
const namesSet = new Set(namesArray);
// duplicates removed now
console.log(namesSet);
//// snow spreading de duplicated into a new array
const uniqueNames = [...namesSet];
////// this is the syntax for doing this on one line, make the set and and spread it into a new arrray
// const uniqueNames = [...new Set(namesArray)];
// console.log(uniqueNames);

const ages = new Set();
ages.add(20);
ages.add(25).add(30);
ages.add(25);
ages.delete(30);

console.log(ages, ages.size);
console.log(ages.has(30), ages.has(20));

ages.clear();
console.log(ages);

const ninjas = new Set([
  { name: "shaun", age: 30 },
  { name: "crystal", age: 29 },
  { name: "chun-li", age: 32 }
]);
// can use for each on a set
ninjas.forEach(ninja => {
  console.log(ninja.name, ninja.age);
});
