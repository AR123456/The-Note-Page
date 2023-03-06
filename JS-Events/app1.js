document.getElementById("colorChange").addEventListener("click", function () {
  document.body.style.backgroundColor = randomColor();
});
function randomColor() {
  let characters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += characters[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}
