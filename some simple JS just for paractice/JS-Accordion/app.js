const accordion = document.querySelectorAll(".panel");
//console.log(accordion);
accordion.forEach((ele) => {
  //console.log(ele);
  ele.addEventListener("click", toggleEle);
});

function toggleEle(e) {
  console.log(e.target.parentElement);
  accordion.forEach((ele) => {
    if (e.target.parentElement === ele) {
      ele.classList.toggle("active");
    } else {
      ele.classList.remove("active");
    }
  });
}
