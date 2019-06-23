//true
var arr = [-1, -2, -3];
arr.every(function(value, index, array) {
  return value < 0;
});

// false
var arr = [1, 2, 3];
arr.every(function(value, index, array) {
  return value > 2;
});

//  in a function
function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array) === false) {
      return false;
    }
    return true;
  }
}

//
function allLowerCase(str) {
  return str.split("").every(function(value) {
    return value === value.toLowerCase();
  });
}
allLowerCase("this is really nice"); //true
allLowerCase("this is Really nice"); //false

function allArrays(arr) {
  return arr.every(Array.isArray);
}
allArrays([[1], [2], [3, 4]]); //true
allArrays([[1], [2], {}]); //false
