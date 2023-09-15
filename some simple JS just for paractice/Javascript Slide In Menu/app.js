const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const spanInvisible = document.getElementById("span-invisible");

burger.addEventListener("click", () => {
  nav.style.opacity = "1";
  spanInvisible.style.opacity = 0;
});
