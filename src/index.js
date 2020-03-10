var numbers = [3, 56, 2, 48, 5];

//Find - find the first item that matches from an array.
const foundNum = numbers.find(function(num) {
  return num > 10;
});
console.log(foundNum);
//FindIndex - find the index of the first item that matches.
const foundIndex = numbers.findIndex(function(num) {
  return num > 10;
});
console.log(foundIndex);
