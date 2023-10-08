// get the input field for listener
const emailInput = document.querySelector("#email");

const emailRegex =
  /^([A-Za-z\d\.-]+)@([A-Za-z\d-]+)\.([A-Za-z]{2,6})(\.[A-Za-z]{2,6})?$/;

emailInput.addEventListener("keyup", (e) => {
  // console.log(e.target.value);
  // The test() method tests for a match in a string.If it finds a match, it returns true, otherwise it returns false.
  //  https://www.w3schools.com/jsref/jsref_regexp_test.asp
  if (emailRegex.test(e.target.value)) {
    // conditions to add valid class
    emailInput.parentElement.classList.add("valid");
  } else {
    // remove valid class
    emailInput.parentElement.classList.remove("valid");
  }
});

// better regex
// const emailRegex =
// /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
