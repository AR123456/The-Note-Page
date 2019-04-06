function checkSpeed() {
  var speed = document.getElementById("speed").value;
  if (speed > 70) {
    alert("you are going to fasst ");
  } else if (speed < 40) {
    alert("You are going too slow");
  } else {
    alert("your speed is fine ");
  }
}

function checkSeason() {
  var x = document.getElementById("myInput").value.toLowerCase();
  switch (x) {
    case "summer":
      alert("Its summer!");
      break;
    case "winter":
      alert("Its winter!");
      break;
    case "spring":
      alert("Its spring!");
      break;
    case "fall":
      alert("fall!");
      break;
    default:
      alert("what??? try again ");
  }
}
