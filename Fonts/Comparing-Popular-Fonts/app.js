// const FontButtons = document.querySelectorAll("font-buttons");
// const TextWrapper = document.querySelector(".text-wrapper");
// FontButtons.forEach((fontButton) => {
//   //  get the font to display from the attribute
//   const font = fontButton.getAttribute("data-font");
//   fontButton.addEventListener("click", () => {
//     console.log("click");
//     TextWrapper.setAttribute("data-font", font);
//     FontButtons.forEach((fButt) => fButt.classList.remove("active-button"));
//     fontButton.classList.add("active-button");
//   });
// });
const FontButtons = document.querySelectorAll(".font-buttons li");
const TextWrapper = document.querySelector(".text-wrapper");

FontButtons.forEach((fontButton) => {
  const font = fontButton.getAttribute("Font");
  fontButton.addEventListener("click", (e) => {
    TextWrapper.setAttribute("Font", font);
    FontButtons.forEach((fButt) => fButt.classList.remove("active-button"));
    fontButton.classList.add("active-button");
  });
});
