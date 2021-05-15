let myBlock;
let myFunctionList;
let funList = [];
const movementArray = ["right", "left", "up", "down"];
// force code to wait for dom to load before running.  Should not really be needed if script tag is at the end of the body tag
// document.addEventListener("DOMContentLoaded", function () {
//   console.log("ready");
//   myBlock = document.createElement("div");
//   myBlock.textContent = "hello world";
//   document.body.appendChild(myBlock);
// });

myBlock = document.createElement("div");
myBlock.textContent = "hello world";
myBlock.style.width = "100px";
myBlock.style.height = "100px";
myBlock.style.backgroundColor = "red";
myBlock.style.color = "white";
myBlock.style.lineHeight = "100px";
myBlock.style.textAlign = "center";
myBlock.style.position = "absolute";
myBlock.style.top = "100px";
myBlock.style.left = "150px";
document.body.appendChild(myBlock);
myFunctionList = document.createElement("div");
document.body.appendChild(myFunctionList);

goLeft = () => {
  let temp = myBlock.offsetLeft;
  temp = temp - 50;
  myBlock.style.left = temp + "px";
};
goRight = () => {
  let temp = myBlock.offsetLeft;
  temp = temp + 50;
  myBlock.style.left = temp + "px";
};
goUp = () => {
  let temp = myBlock.offsetTop;
  temp = temp - 50;
  myBlock.style.top = temp + "px";
};
goDown = () => {
  let temp = myBlock.offsetTop;
  temp = temp + 50;
  myBlock.style.top = temp + "px";
};

addFun = (val) => {
  let span = document.createElement("span");
  span.textContent = "+" + val;
  span.style.padding = "10px";
  span.style.border = "1px solid #ddd";
  span.addEventListener("mouseover", function () {
    this.style.backgroundColor = "red";
    this.style.color = "white";
  });
  span.addEventListener("mouseout", function () {
    this.style.backgroundColor = "white";
    this.style.color = "black";
  });
  span.addEventListener("click", function () {
    let curIndex = funList.indexOf(this);
    console.log(curIndex);
    let tempRemove = funList.splice(curIndex, 1);
    console.log(tempRemove);
    myFunctionList.removeChild(this);
  });
  myFunctionList.appendChild(span);
  funList.push(span);
  console.log(funList);
  //myFunctionList
};
mover = () => {
  if (funList.length > 0) {
    let cur = myBlock.getBoundingClientRect();
    let el = funList.shift();
    let item = el.textContent.replace("+", "");
    myFunctionList.removeChild(el);
    myBlock.innerHTML = "Move:" + item;
    if (item == "left") {
      myBlock.style.left = cur.left - cur.width + "px";
    }
    if (item == "right") {
      myBlock.style.left = cur.left + cur.width + "px";
    }
    if (item == "up") {
      myBlock.style.top = cur.top - cur.height + "px";
    }
    if (item == "down") {
      myBlock.style.top = cur.top + cur.height + "px";
    }
    setTimeout(mover, 300);
  } else {
    myBlock.innerHTML = "Set Path";
    return;
  }
};
randomColor = () => {
  return "#" + Math.random().toString(16).substr(-6);
};

// window.addEventListener("keydown", function (e) {
//   let key = e.key;
//   console.log(e.key + " = " + e.keyCode);
//   console.log(key + " = " + e.keyCode);
// });
document.addEventListener("keydown", function (e) {
  e.preventDefault();
  let keyC = e.key;

  if (keyC == "ArrowLeft") {
    addFun("left");
  } else if (keyC == "ArrowRight") {
    addFun("right");
  } else if (keyC == "ArrowUp") {
    addFun("up");
  } else if (keyC == "ArrowDown") {
    addFun("down");
  } else if (keyC == "c") {
    myBlock.style.backgroundColor = randomColor();
  } else if (keyC == "r") {
    let temp = movementArray[Math.floor(Math.random() * movementArray.length)];
    addFun(temp);
  } else if (keyC == "Enter" || keyC == " ") {
    mover();
  }
});
