// var arr = [1, 2, 3];
// // for each can take 3 parameters into the callback and always returns undefined.

// arr.forEach(function(val, index, array) {
//   console.log(val, index, array);
// });

// var arr2 = [1, 2, 3, ["a", "b", "c"]];
// arr2.forEach(function(val, index, array) {
//   console.log(val, index, array);
// });

// example
// function forEach(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i], i, array);
//   }
// }

// function halfValues(arr) {
//   var newArr = [];
//   arr.forEach(function(val) {
//     newArr.push(val / 2);
//   });
//   return newArr;
// }

// halfValues([2, 4, 6]);

// forEach

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr) {
  var newArr = [];
  arr.forEach(function(val) {
    newArr.push(val * 2);
  });
  return newArr;
}

function onlyEvenValues(arr) {
  var newArr = [];
  arr.forEach(function(val) {
    if (val % 2 === 0) {
      newArr.push(val);
    }
  });
  return newArr;
}

function showFirstAndLast(arr) {
  var newArr = [];
  arr.forEach(function(val) {
    newArr.push(val[0] + val[val.length - 1]);
  });
  return newArr;
}

function addKeyAndValue(arr, key, value) {
  arr.forEach(function(val) {
    val[key] = value;
  });
  return arr;
}

function vowelCount(str) {
  var splitArr = str.toLowerCase().split("");
  var obj = {};
  var vowels = "aeiou";

  splitArr.forEach(function(letter) {
    if (vowels.indexOf(letter) !== -1) {
      if (obj[letter]) {
        obj[letter]++;
      } else {
        obj[letter] = 1;
      }
    }
  });
  return obj;
}
