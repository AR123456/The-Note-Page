const gamearea = document.querySelector(".gamearea");
const message = document.querySelector(".message");
const button = document.querySelector("button");
const gameColors = ["red", "blue", "green", "yellow"];
let gameClicks = [];
let userClicks = [];
let inPlay = false;
let playNum = 2;
let setup = () => {
  for (let i = 0; i < gameColors.length; i++) {
    let div = document.createElement("div");
    div.style.backgroundColor = gameColors[i];
    div.classList.add("box");
    div.style.opacity = "0.25";
    div.myColor = gameColors[i];
    div.addEventListener("click", checkAnswer);
    gamearea.appendChild(div);
  }
};
window.addEventListener("load", setup);

button.addEventListener("click", function () {
  if (!inPlay) {
    player();
  }
});

player = () => {
  button.disabled = true;
  button.style.display = "none";

  message.innerHTML = `Match Pattern`;
  gameClicks = [];
  userClicks = [];
  runSequence(playNum);
};
runSequence = (num) => {
  let squares = document.querySelectorAll(".box");
  num--;
  if (num < 0) {
    inPlay = true;
    return;
  }
  let randomNum = Math.floor(Math.random() * gameColors.length);
  console.log(squares[randomNum]);
  gameClicks.push(gameColors[randomNum]);
  console.log(gameClicks);
  squares[randomNum].style.opacity = "1";
  setTimeout(function () {
    squares[randomNum].style.opacity = "0.25";
    setTimeout(function () {
      runSequence(num);
    }, 100);
  }, 500);
};

checkAnswer = (e) => {
  if (inPlay) {
    let el = e.target;
    userClicks.push(el.myColor);
    el.style.opacity = "1";
    setTimeout(function () {
      el.style.opacity = "0.5";
    }, 500);
    if (userClicks.length == gameClicks.length) {
      inPlay = false;
      endGame();
    }
  }
};

endGame = () => {
  console.log("game over");
  button.disabled = false;
  button.style.display = "block";
  if (userClicks.toString() == gameClicks.toString()) {
    playNum++;
    message.innerHTML = `Correct you are now at level: ${playNum}`;
    // messager("correct New Level = " + playNum);
    button.innerText = "Go again";
  } else {
    message.innerHTML = `That is not correct you are still at level: ${playNum}`;
  }
  button.innerText = "Go again";
};
