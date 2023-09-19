const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", (e) => {
  // toggles the presence of the class "open" on the nav element
  nav.classList.toggle("open");
  burger.classList.toggle("open");
});
