const styleSheets = document.styleSheets;
console.log(styleSheets);
// style sheet list is an array like object - to make it easier convert it into an acctual array
const styleSheetsArray = Array.from(styleSheets);
// find works by running a function on each item in the array when the condition is met run the call back function
const targetSheet = styleSheetsArray.find((styleSheet) => {
  // looking for href of null
  if (styleSheet?.href) {
    // there is an href value so do this
    // create a new URL object so we can use URL methods on it
    const pathName = new URL(styleSheet.href).pathname.split("/").pop();
    if (pathName === "extra.css") {
      return styleSheet;
    }
  }
});
console.log(targetSheet);
// https://www.linkedin.com/learning/controlling-css-with-javascript/find-specific-style-sheet-in-a-document?autoSkip=true&autoplay=true&resume=false&u=107512682
