const animalArray = ["lion", "cougar", "dog"];
// make sure dom content has loaded or put the script at bottome of page
// document.addEventListener("DOMContentLoaded", int);
// function int() {
//   console.log("page ready");
// }
animalArray.forEach(function (i) {
  let div = document.createElement("div");
  div.setAttribute("class", "animal " + i);
  document.body.appendChild(div);
  div.innerText = i;
});

const animals = document.querySelectorAll(".animal");
// this is a node list

for (let i = 0; i < animals.length; i++) {
  animals[i].addEventListener("click", function () {
    let animal = this.innerHTML.toLowerCase();
    makeSound(animal);
    addStyle(animal);
  });
}
function makeSound(name) {
  console.log(name);
  switch (name) {
    case "lion":
      let sound1 = new Audio("sound/lion.mp3");
      sound1.play();
      break;
    case "cougar":
      let sound2 = new Audio("sound/cougar.mp3");
      sound2.play();
      break;
    case "dog":
      let sound3 = new Audio("sound/dog.mp3");
      sound3.play();
      break;
    default:
      break;
  }
}

function addStyle(name) {
  let activeEle = document.querySelector("." + name);
  activeEle.classList.add("active");
  setTimeout(function () {
    activeEle.classList.remove("active");
  }, 200);
}
