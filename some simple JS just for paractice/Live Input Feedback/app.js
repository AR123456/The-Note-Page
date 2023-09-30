const input = document.querySelector("input");
let email = "";
input.addEventListener("keyup", (e) => {
  keyPress = e.key;
  email += keyPress;
  if (validateEmail(email)) {
    console.log(email);
  }
  console.log(keyPress);
  console.log(email);
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
