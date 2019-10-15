// rest parameter- unknown number of parameters, bundles the arguments in one parameter into an array
const double = (...nums) => {
  console.log(nums);
  return nums.map(num => num * 2);
};

const result = double(1, 3, 5, 7, 2, 4, 6, 8);
console.log(result);

// spread syntax (arrays) - works in the oposite way takes an array and spreads into individual components
// use case spread one array into another
const people = ["shaun", "ryu", "chun-li"];
const members = ["mario", "luigi", ...people];
console.log(members);

// spread syntax (objects)-  ... makes Clone by spreading the properties of one object inot antoher - make a new copy of another object
const person = { name: "shaun", age: 30, job: "net ninja" };
const personClone = { ...person, location: "manchester" };
console.log(person, personClone);
