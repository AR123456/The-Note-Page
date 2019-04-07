let counter = document.getElementById("counter");
let x = 0;
let myCounter = setInterval(function() {
  x++;
  counter.innerHTML = x;
}, 1000);
let delayedWelcomeMessage = setTimeout(function() {
  alert("Welcome to our page");
}, 3000);
