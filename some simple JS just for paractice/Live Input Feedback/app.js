const input = document.querySelector("input");
// from chatGPT - verify
const emailPattern = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

input.addEventListener("keyup", (e) => {
  console.log(e.key);
});
