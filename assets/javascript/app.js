// //variables
let playing = false;
let score, action, timeremaining, correctAnswer;

// start or reset the game
// on clicks - to start ofr reset
document.getElementById("startreset").onclick = function() {
  // reset
  if (playing == true) {
    location.reload(); // reload page
  } else {
    // begin play
    playing = true;
    // set score to 0
    score = 0;
    document.getElementById("scorevalue").innerHTML = score;
    // show countdown
    show("timeremaining");
    timeremaining = 60;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    /// cal the hide function pass in the game over div id
    hide("gameOver");

    // change the button to say reset
    document.getElementById("startreset").innerHTML = "Reset Game";

    //start countdown
    startCountdown();
    //
    generateQA();
  }
};
//answer clicks
// the for loop for the answer boxes
for (let i = 1; i < 5; i++) {
  document.getElementById("box" + i).onclick = function() {
    // check if playing
    if (playing == true) {
      if (this.innerHTML == correctAnswer) {
        //do things for correct answer
        score++;
        document.getElementById("scorevalue").innerHTML = score;
        // hide wrong and show corect
        hide("wrong");
        show("correct");
        setTimeout(function() {
          hide("correct");
        }, 1000);
        generateQA();
      } else {
        //wrong answer stuff
        hide("correct");
        show("wrong");
        setTimeout(function() {
          hide("wrong");
        }, 1000);
      }
    }
  };
}
//functions
// start countdown
function startCountdown() {
  action = setInterval(function() {
    timeremaining -= 1;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    if (timeremaining == 0) {
      stopCountdown();
      show("gameOver");
      document.getElementById("gameOver").innerHTML =
        "<p>Game Over</p> <p> Your score is " + score + ".</p>";
      hide("timeremaining");
      hide("correct");
      hide("wrong");
      playing = false;
      document.getElementById("startreset").innerHTML = "Start Game";
    }
  }, 1000);
}
// stop countdown
function stopCountdown() {
  clearInterval(action);
}

//function to hide an element by its id
function hide(Id) {
  document.getElementById(Id).style.display = "none";
}

//function to show an element by its id

function show(Id) {
  document.getElementById(Id).style.display = "block";
}
// function to generate the answers
function generateQA() {
  let x = 1 + Math.round(9 * Math.random());
  let y = 1 + Math.round(9 * Math.random());
  correctAnswer = x * y;
  document.getElementById("question").innerHTML = x + "x" + y;
  var correctPosition = 1 + Math.round(3 * Math.random());
  document.getElementById("box" + correctPosition).innerHTML = correctAnswer;
  //fill other boxes with the wrong answers
  let answers = [correctAnswer];

  for (i = 1; i < 5; i++) {
    if (i != correctPosition) {
      var wrongAnswer;
      do {
        wrongAnswer =
          (1 + Math.round(9 * Math.random())) *
          (1 + Math.round(9 * Math.random()));
      } while (answers.indexOf(wrongAnswer) > -1);
      document.getElementById("box" + i).innerHTML = wrongAnswer;
      answers.push(wrongAnswer);
    }
  }
}
