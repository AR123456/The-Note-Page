const endDate = document.querySelector("input[name='endDate']");
const clock = document.querySelector(".clock");
const savedValue = localStorage.getItem("countdown") || false;

let timeInterval;
let timeStop = true;

startClock = (date) => {
  console.log(date);
  function updateCounter() {
    let timeRemaining = timeLeft(date);
    if (timeRemaining.total <= 0) {
      timeStop = false;
    }
    for (let pro in timeRemaining) {
      let el = clock.querySelector("." + pro);
      if (el) {
        el.innerHTML = timeRemaining[pro];
      }
    }
  }
  updateCounter();
  if (timeStop) {
    timeInterval = setInterval(updateCounter, 1000);
  } else {
    clearInterval(timeInterval);
  }
};
timeLeft = (date) => {
  let currentDate = new Date();
  let total = Date.parse(date) - Date.parse(currentDate);
  let seconds = Math.floor((total / 1000) % 60);
  let minutes = Math.floor((total / 1000 / 60) % 60);
  let hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  let days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total: total,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
};
if (savedValue) {
  startClock(savedValue);
  let inputValue = new Date(savedValue);
  endDate.valueAsDate = inputValue;
}
endDate.addEventListener("change", function (e) {
  e.preventDefault();
  clearInterval(timeInterval);
  const temp = new Date(endDate.value);
  localStorage.setItem("countdown", temp);
  startClock(temp);
  timeStop = true;
});
