// https://www.youtube.com/watch?v=XF1_MlZ5l6M
const divs = document.querySelectorAll("div");
// pass in the event , div and callback
addGlobalEventListener("click", "div", (e) => {
  console.log("hi");
});
// takes in type of event listener, the selector and the call back to run
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}
const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "purple";
document.body.append(newDiv);
