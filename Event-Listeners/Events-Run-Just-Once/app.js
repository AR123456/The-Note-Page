// https://www.youtube.com/watch?v=XF1_MlZ5l6M

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
// onclick on the grandparent- addEventListener takes in 2 or 3 params type of event, call back function to run, and last an object that itentifes characterisitcs about the event listener
// mozzila ref  https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
grandparent.addEventListener("click", (e) => {
  // target is thing the event happend on and used the most often
  // console.log(e.target, "Grandparent1");
  console.log("Grandparent bubble 1");
});

// parent event listenter
// if you want to control an event listner to run at just a defined interval can use removeEvent listener
parent.addEventListener("click", printHi);
setTimeout(() => {
  // on the click remove the printHi function
  parent.removeEventListener("click", printHi);
}, 2000);

//child event listenter
child.addEventListener("click", (e) => {
  console.log("child bubble 1");
});

// if you want to control an event listner to run at just a defined interval can use removeEvent listener
// note that this function needs to be defined outside of the removeEventListener
function printHi() {
  console.log("Hi");
}
