const message = document.querySelector(".message");
const guess = document.querySelector("input");
const button = document.querySelector("button");
let inplay = false;
let scramble = "";
let scrabled = "";
let score = 0;
const wordArray = ["fun", "pun", "sun"];

// button.addEventListener("click", (e) => {
button.addEventListener("click", function () {
  console.log("I have been clicked ");
  if (!inplay) {
    inplay = true;
    score = 0;
    button.innerHTML = "Guess";
    guess.classList.toggle("hidden");
    scramble = createWord();
    scrambled = randomArray(scramble.split("")).join("");
    message.innerHTML = scrambled;
  } else {
    let tempGuess = guess.value;
    score++;
    if (tempGuess === scramble) {
      console.log("correct");
      inplay = false;
      message.innerHTML = `Correct it was ${scramble}.  attempts = ${score} `;
      button.innerHTML = "Start";
      guess.classList.toggle("hidden");
    } else {
      console.log("guess again");
      message.innerHTML = `Wrong ${scrambled}`;
    }
  }
});

createWord = () => {
  let randomIndex = Math.floor(Math.random() * wordArray.length);
  let tempWord = wordArray[randomIndex];
  return tempWord;
};
randomArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    let j = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};
