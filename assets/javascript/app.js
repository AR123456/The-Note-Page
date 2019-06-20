// making sure window loads before the canvas starts
window.onload = function() {
  // a simple line
  var canvas = document.getElementById("hello-world-canvas");
  var ctx = canvas.getContext("2d");

  // //first line
  // context.beginPath(); //reset the context state
  // context.lineCap = "butt"; //f;lat edge
  // context.strokeStyle = "red";
  // context.lineWidth = 10;
  // context.moveTo(100, 100); // the start point of linex,y
  // context.lineTo(300, 100); //end point of line c,y
  // context.stroke(); //connect the points to draw the line

  // //second line
  // context.beginPath(); //reset the context state
  // context.lineCap = "round"; // round the ends bu 1/2 width of line
  // context.strokeStyle = "blue";
  // context.lineWidth = 10;
  // context.moveTo(100, 125); // the start point of linex,y
  // context.lineTo(300, 125); //end point of line c,y
  // context.stroke(); //connect the points to draw the line
  // // third line
  // context.beginPath(); //reset the context state
  // context.lineCap = "square";
  // context.strokeStyle = "green";
  // context.lineWidth = 10;
  // context.moveTo(100, 150); // the start point of linex,y
  // context.lineTo(300, 150); //end point of line c,y
  // context.stroke(); //connect the points to draw the line

  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.lineCap = "butt";
  ctx.moveTo(20, 20);
  ctx.lineTo(200, 20);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineCap = "round";
  ctx.moveTo(20, 40);
  ctx.lineTo(200, 40);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineCap = "square";
  ctx.moveTo(20, 60);
  ctx.lineTo(200, 60);
  ctx.stroke();
};
