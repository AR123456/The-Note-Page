// // making sure window loads before the canvas starts
// window.onload = function() {
//   // a simple line
//   var canvas = document.getElementById("hello-world-canvas");
//   var context = canvas.getContext("2d");

//   //zig
//   context.beginPath(); //reset the context state
//   context.strokeStyle = "red";
//   context.moveTo(30, 30); // the start point of linex,y
//   context.lineTo(80, 80); //end point of line c,y
//   context.stroke(); //connect the points to draw the line
//   //zag
//   context.beginPath(); //reset the context state
//   context.strokeStyle = "red";
//   context.moveTo(80, 80); // the start point of linex,y
//   context.lineTo(130, 30); //end point of line c,y
//   context.stroke(); //connect the points to draw the line
//   //zig
//   context.beginPath(); //reset the context state
//   context.strokeStyle = "red";
//   context.moveTo(130, 30); // the start point of linex,y
//   context.lineTo(180, 80); //end point of line c,y
//   context.stroke(); //connect the points to draw the line
//   //zag
//   context.beginPath(); //reset the context state
//   context.strokeStyle = "red";
//   context.moveTo(180, 80); // the start point of linex,y
//   context.lineTo(230, 30); //end point of line c,y
//   context.stroke(); //connect the points to draw the line
//   //zig

//   context.beginPath(); //reset the context state
//   context.strokeStyle = "red";
//   context.moveTo(230, 30); // the start point of linex,y
//   context.lineTo(280, 80); //end point of line c,y
//   context.stroke(); //connect the points to draw the line
// };
// ******************************************** a better way
// making sure window loads before the canvas starts
window.onload = function() {
  // a simple line
  var canvas = document.getElementById("hello-world-canvas");
  var context = canvas.getContext("2d");

  //zig
  context.beginPath(); //reset the context state
  context.strokeStyle = "red";
  context.moveTo(30, 30); // the start point of linex,y
  context.lineTo(80, 80); //end point of line c,y
  context.lineTo(130, 30); //end point of line c,y
  context.lineTo(180, 80); //end point of line c,y
  context.lineTo(230, 30); //end point of line c,y
  context.lineTo(280, 80); //end point of line c,y
  context.stroke(); //connect the points to draw the line
};
