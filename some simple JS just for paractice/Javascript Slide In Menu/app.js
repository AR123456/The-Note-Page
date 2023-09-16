burger = document.querySelector(".burger");
menu = document.querySelector("ul");

burger.addEventListener("click", () => {
  console.log("clicked");
});

menu.addEventListener("click", () => {
  console.log("in unordered list");
});
