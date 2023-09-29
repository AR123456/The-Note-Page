const input = document.querySelector("input");
// from chatGPT - verify
const emailPattern = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
const enteredArr = [];
input.addEventListener("keyup", (e) => {
  keyPress = e.key;
  enteredArr.push(keyPress);
  console.log(keyPress);
  console.log(enteredArr);
});
