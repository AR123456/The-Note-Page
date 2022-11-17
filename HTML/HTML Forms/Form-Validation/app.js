//https://www.youtube.com/watch?v=In0nB0ABaUk
const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
// need an element to show errors
const errorElement = document.getElementById("error");
// to catch the error need to stop the forms default submit behavior of refreshing the page
form.addEventListener("submit", (e) => {
  // this will prevent the submit and page refresh.

  // create an array of error messages
  let messages = [];
  if (name.value === "" || name.value == null) {
    // bad actors can mess with the HTML so need validation on server too
    messages.push("Name is required");
  }
  if (password.value.length <= 6) {
    messages.push("Password must be longer than 6 characters");
  }
  if (password.value.length >= 20) {
    messages.push("Password must be less than 20 characters");
  }
  if (password.value === "password") {
    messages.push("Password cannot be password");
  }
  if (messages.length > 0) {
    // only do this if there are errors
    e.preventDefault();
    // put the messages from the array onto the page separated by coma
    errorElement.innerText = messages.join(",");
  }
});
