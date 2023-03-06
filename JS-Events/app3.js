// refactor
document.getElementById("colorChange").addEventListener("click", function () {
  //   document.body.style.backgroundColor = randomColor();
  randomColor();
});
randomColor = () => {
  let characters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += characters[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = color;
  console.log(color);
  return color;
};
