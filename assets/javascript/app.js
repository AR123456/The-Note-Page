var shoppingList = ["bread", "eggs", "milk"];
showResult(shoppingList);
showResult(shoppingList[0]);
showResult(shoppingList[2]);

function showResult(x) {
  document.getElementById("myParagraph").innerHTML += "<br />" + x;
}
shoppingList[1] = "yogurt";
showResult(shoppingList);
shoppingList[2] = "orange";
showResult(shoppingList);
delete shoppingList[1];
showResult(shoppingList);
shoppingList.splice(1, 1);
shoppingList.splice(1, 0, "banana", "apple");
showResult(shoppingList);
shoppingList.sort();
showResult(shoppingList);
shoppingList.reverse();
showResult(shoppingList);
var myString = "what is weather like?";
var myArray = myString.split(" ", 2);
showResult(myArray);
