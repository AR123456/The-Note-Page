// generate 6 random digits (single digit number)
// user guesses secret combination 6 digits
// track guess count
// Instructions div
// row div  to hold digits
// 6 single columns to hold each digin
// white backgrond before guess
// user enters a combination of digits - up and down arrow keys to increase or decreate
// user clicks check combo
// turn background red if too high of a guess
// turn backgound bule if too low of a guess
// green if correct
const gameArea = document.querySelector(".gameArea");
const button = document.querySelector("button");
const message = document.querySelector(".message");
let playGame = false;
let score = 0;
button.addEventListener("click", function () {
  if (!playGame) {
    playGame = true;
    makeComboChecker();
    button.innerHTML = "Check Combo";
  } else {
    checker();
  }
});

makeComboChecker = () => {
  for (let i = 0; i < 6; i++) {
    let el = document.createElement("input");
    el.setAttribute("type", "number");
    el.max = 9;
    el.min = 0;
    el.style.width = "40px";
    el.style.height = "40px";
    el.classList.add("numb");
    el.size = 1;
    el.value = 0;
    el.order = 0;
    el.correct = Math.floor(Math.random() * 10);
    console.log(el.correct);
    gameArea.appendChild(el);
  }
};
checker = () => {
  score++;
  message.innerHTML = "Guesses " + score;
  const numbers = document.querySelectorAll(".numb");
  let winCondition = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i].value == numbers[i].correct) {
      numbers[i].style.backgroundColor = "green";
      numbers[i].style.color = "white";
      winCondition++;
    } else {
      let color = numbers[i].value < numbers[i].correct ? "blue" : "red";
      numbers[i].style.backgroundColor = color;
      numbers[i].style.color = "black";
    }
    if (winCondition == numbers.length) {
      gameEnd();
    }
  }
};
gameEnd = () => {
  message.innerHTML = `You cracked the safe in ${score} guesses ! `;
  gamePlay = false;
  button.innerHtML = "Start";
};
