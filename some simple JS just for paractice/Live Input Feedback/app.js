const input = document.querySelector("input");
const tickMark = document.querySelector(".tick");
const formBox = document.querySelector("form input");
//  onkeyup run this function
input.addEventListener("keyup", (e) => {
  validateEmail(e.key);
});
function validateEmail() {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // The value property sets or returns the value of the value attribute of a text field.The value property contains the default value OR the value a user types in (or a value set by a script).
  const isValid = emailRegex.test(input.value);

  if (isValid) {
    // turn check mark green
    tickMark.style.color = "green";
    formBox.style.border = "2px solid green";
    // border: 2px solid #777;
    console.log("valid");
  } else {
    tickMark.style.color = "red";
    console.log("Invalid email address");
  }
}

// const validateEmail = (email) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };
