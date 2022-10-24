const box = document.querySelector(".box");
const control = document.querySelector("#degrees");
// when the value changes   on change event set the box transition to the value in the control box
control.addEventListener("change", () => {
  box.style.transform = `rotate(${control.value}deg)`;
});
