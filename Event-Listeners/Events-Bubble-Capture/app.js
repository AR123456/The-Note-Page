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
// can run more than one event listener with the single click, and they are run in order that they are defined.
grandparent.addEventListener("click", (e) => {
  // target is thing the event happend on and used the most often
  console.log("Grandparent bubble 2");
});
// parent event listenter
parent.addEventListener("click", (e) => {
  console.log("parent bubble1");
});
//child event listenter
child.addEventListener("click", (e) => {
  console.log("child bubble 1");
});
document.addEventListener("click", (e) => {
  console.log("Document bubble 1");
});
//  Clcik on child runs it, then parent,then grandparent, then document on click events  it  closest to furthes away element - bubbling bubbling up the tree (inside out)
// captureing happens first and looks at the thing furthest away and goes from dom to grandparent to parent to child  ( outside in)
// the third arg passed into the on click is where captureing comes into play
// passing in true this ways says this should be a captue event
document.addEventListener(
  "click",
  (e) => {
    console.log("document in the capture 1");
  },
  { capture: true }
);
grandparent.addEventListener(
  "click",
  (e) => {
    console.log("grandparent in the capture 1");
  },
  { capture: true }
);
parent.addEventListener(
  "click",
  (e) => {
    // to stop the propigation of an event can add the stop propagation method on it.
    // e.stopPropagation();
    console.log("parent in the capture 1");
  },
  { capture: true }
);
child.addEventListener(
  "click",
  (e) => {
    console.log("child in the capture 1");
  },
  { capture: true }
);
