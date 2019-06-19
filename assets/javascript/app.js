window.onload = function() {
  // Definitions
  var canvas = document.getElementById("lab-complex-shapes-canvas");
  var context = canvas.getContext("2d");

  // Mouse Events
  //  - mousedown / mouseup
  //  - mouseover / mouseout
  //  - mousemove
  //  - click
  //  - dblclick

  // canvas.addEventListener("mousedown", function(event) {
  //   console.log("mousedown");
  //   console.log(event);
  // });

  // canvas.addEventListener("mouseup", function(event) {
  //   console.log("mouseup");
  //   console.log(event);
  // });

  // canvas.addEventListener("mouseover", function(event) {
  //   console.log("mouseover");
  //   console.log(event);
  // });

  // canvas.addEventListener("mouseout", function(event) {
  //   console.log("mouseout");
  //   console.log(event);
  // });

  // canvas.addEventListener("mousemove", function(event) {
  //   console.log("mousemove");
  //   console.log(event);
  // });

  canvas.addEventListener("click", function(event) {
    console.log("click");
    console.log(event);
  });

  // canvas.addEventListener("dblclick", function(event) {
  //   console.log("dblclick");
  //   console.log(event);
  // });
};

// could also listen to the window

// window.onload = function() {

//   // Mouse Events
//   //  - mousedown / mouseup
//   //  - mouseover / mouseout
//   //  - mousemove
//   //  - click
//   //  - dblclick

//   window.addEventListener("mousedown", function(event) {
//     console.log("mousedown");
//     console.log(event);
//   });

//   window.addEventListener("mouseup", function(event) {
//     console.log("mouseup");
//     console.log(event);
//   });

//   window.addEventListener("mouseover", function(event) {
//     console.log("mouseover");
//     console.log(event);
//   });

//   window.addEventListener("mouseout", function(event) {
//     console.log("mouseout");
//     console.log(event);
//   });

//   window.addEventListener("mousemove", function(event) {
//     console.log("mousemove");
//     console.log(event);
//   });

//   window.addEventListener("click", function(event) {
//     console.log("click");
//     console.log(event);
//   });

//  window.addEventListener("dblclick", function(event) {
//     console.log("dblclick");
//     console.log(event);
//   });
// };
