//true
var arr = [1, 2, 3];
arr.some(function(value, index, array) {
  return value < 2;
});

//false
var arr = [1, 2, 3];
arr.some(function(value, index, array) {
  return value > 4;
});

function hasEvenNumber(arr) {
  return arr.some(function(value) {
    return value % 2 === 0;
  });
}
hasEvenNumber([1, 2, 3, 4]); // true
hasEvenNumber([1, 5, 3]); //false

function hasComa(str) {
  return str.split("").some(function(value) {
    return value === ",";
  });
}
hasComa("This is wonderful"); //false
hasComa("This ,is wonderful"); //  true
