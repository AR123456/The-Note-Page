// //  set up html

// //
// const button = document.querySelector("button");
// const tipDiv = document.querySelector(".tip");

// console.log(button);
// button.addEventListener("click", function () {
//   const bill = document.querySelector(".bill");
//   let tip = (bill.value * 0.15).toFixed(2);
//   // console.log(bill.value);
//   let outPutDiv = `<div>
//             <p>
//               You shoud tip $ ${tip} on $ ${bill.value}
//             </p>
//        </div>`;
//   tipDiv.innerHTML = outPutDiv;
// });

//
const button = document.querySelector("button");
const tipDiv = document.querySelector(".tip");

console.log(button);
button.addEventListener("click", () => {
  const bill = document.querySelector(".bill");
  let tip = (bill.value * 0.15).toFixed(2);
  // console.log(bill.value);
  let outPutDiv = `<div>
            <p>
              You shoud tip $ ${tip} on $ ${bill.value}
            </p>
       </div>`;
  tipDiv.innerHTML = outPutDiv;
});
