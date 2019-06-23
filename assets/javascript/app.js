// three parameters in  the callback.

// This is just to show you that I have access to each value index and the array just like what we saw

// with mapping for each.

// You do not need to pass these three parameters every time.

// Only the ones that you need.

// Just remember the order of the parameters is important.

// The first parameter to the callback function is always the value.

// The second is whatever index you're at.

// And the third parameter is the entire array.
var arr = [1, 2, 3];
arr.filter(function(value, index, array) {
  return value > 2;
});

// w let's look at another example.

// Here we have an array called instructors and it contains four objects.

// Each object has a name property and a value which will be early.

// Tim mad and cold.

// What I'd like to do is return a new array of objects whose value for the name property is more than

// three characters long.

// So I'm going to invoke the filter function on this array and pass a callback.

// Remember the callback function has to return true or false so we can use an expression that evaluates

// to a boolean will return value.

// Namedrop length greater than 3.

// Notice here we're not using an if statement.

// Try not to write IF statements inside of the callback to filter which we don't need to do since we just

// have to return true or false.
var instructors = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" }
];
instructors.filter(function(value, index, array) {
  return value.name.length > 3;
});

// Let's create a function called Filter that accepts an array and a callback function will first create

// a variable called New R which is an empty array will then create a for loop and initialize a variable.

// A zero will loop as long as it is less than the length of the array and increment by one after each

// iteration inside of the loop.

// We'll check to see if the result of the callback function with a value index an array passed to it returns

// true if it does we'll push into the new R variable.

// The value we're iterating at once we're done iterating through the array we need to make sure to return

// our new array variable and that's it.
function filter(array, callback) {
  var newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

// Here I have a function called only four letters which accepts an array and returns the result of filtering

// the array passed to it inside of the callback filter.

// I'm returning an expression which will evaluate to true if each value in the array has a length of 4.

// You can see that when I run this on an array of strings I only get back an array of values with 4 characters

// just like map I need to return statements 1 for my function and the other inside the callback to the

// filter function.

function onlyFourLetterNames(arr) {
  return arr.filter(function(value) {
    return value.length === 4;
  });
}
onlyFourLetterNames(["Rusty", "Matt", "Moxie", "Colt"]);

// use filter to remove values from array
////////////////////////////////////////////////

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
  return arr.filter(function(val) {
    return val[key] !== undefined;
  });
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
  return arr.filter(function(val) {
    return val === searchValue;
  })[0];
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
  return arr.filter(function(val) {
    return val[key] === searchValue;
  })[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/
// this may not be the most efficient way to do this but shows how to use filter
function removeVowels(str) {
  var vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(function(val) {
      return vowels.indexOf(val) === -1;
    })
    .join("");
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
  return arr
    .filter(function(val) {
      return val % 2 !== 0;
    })
    .map(function(val) {
      return val * 2;
    });
}
