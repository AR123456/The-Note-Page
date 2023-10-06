const input = document.querySelector("input");
//  onkeyup run this function
input.addEventListener("keyup", (e) => {
  validateEmail(e.key);
});
function validateEmail() {
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // The value property sets or returns the value of the value attribute of a text field.The value property contains the default value OR the value a user types in (or a value set by a script).
  const isValid = emailRegex.test(input.value);


  if (isValid) {
    console.log("valid");
  } else {
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
