// https://www.youtube.com/watch?v=XF1_MlZ5l6M
const divs = document.querySelectorAll("div");
// this works if not dynamicaly creating any new divs

// divs.forEach((div) => {
//   div.addEventListener("click", () => {
//     console.log("Hi");
//   });
// });
// this new div was created after the selection of the divs
// to apply the event listener so there is no on click on it
const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "purple";
document.body.append(newDiv);

// to solve this use event delegation by applying the on click to the document
document.addEventListener("click", (e) => {
  if (e.target.matches("div")) {
    console.log("hi");
  }
});
