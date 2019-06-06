var arr = [1, 2, 3];
arr.map(function(value, index, array) {
  return value * 2;
});

function map(arr, callback) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
}

// could have used  for each to solve this. But map is a bit more friendly since it already returns a new array.

// For each can be used if you want to overwrite values in an array. Or change something externally or when you would like a new array to be returned to you.

// Especially one of the same length Map  should always be used.
function tripleValues(arr) {
  return arr.map(function(value) {
    return value * 3;
  });
}
tripleValues([1, 2, 3]);

// Map is very helpful when you want to extract values from an object and place them in an array. But  always need to return something in the callback to map and that map will always return an array of the same length as the array that it was called.
function onlyFirstName(arr) {
  return arr.map(function(val) {
    return val.first;
  });
}
onlyFirstName([
  { first: "Tim", last: "Garcia" },
  { first: "Matt", last: "Lane" }
]);

/////////////////////////////////////
/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([1,-2,-3]) // [2,-4,-6]
*/

function doubleValues(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}
/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
  return arr.map(function(val, idx) {
    return val * idx;
  });
}
/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/
function extractValue(arr, key) {
  return arr.map(function(val) {
    return val[key];
  });
}
/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/
function extractFullName(arr) {
  return arr.map(function(val) {
    return val.first + " " + val.last;
  });
}
