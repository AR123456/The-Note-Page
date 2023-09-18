burger = document.querySelector(".burger");
menu = document.querySelector("ul");

burger.addEventListener("click", () => {
  // on this click animate spans to x
  // slide the menu in below the x
  // if the X is clicked slide the menu back out
  console.log("clicked");
});

menu.addEventListener("click", () => {
  console.log("in unordered list");
});
