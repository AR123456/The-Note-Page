const styleSheets = document.styleSheets;
const listButton = document.getElementById("list");
const gridButton = document.getElementById("grid");
// RODO
// Disable grid style sheet on load
// add button funtionality to toggle grid when selected
// highlight the current layout button
listButton.classList.add("current");
// target and disable stylesheet
const styleSheetsArray = Array.from(styleSheets);
const gridStyleSheet = styleSheetsArray.find((styleSheet) => {
  if (styleSheet?.href) {
    const pathName = new URL(styleSheet.href).pathname.split("/").pop();
    if (pathName === "grid.css") {
      return styleSheet;
    }
  }
});
gridStyleSheet.disabled = true;

// on clicking grid view set disabled to false
gridButton.addEventListener("click", (e) => {
  gridStyleSheet.disabled = false;
  gridButton.classList.add("current");
  listButton.classList.remove("current");
});

listButton.addEventListener("click", (e) => {
  gridStyleSheet.disabled = true;
  gridButton.classList.remove("current");
  listButton.classList.add("current");
});
