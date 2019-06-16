// making sure window loads before the canvas starts
window.onload = function() {
    // a simple line 
  var canvas = document.getElementById("hello-world-canvas");
  var context = canvas.getContext("2d");

  //drawing line steps
  context.beginPath(); //reset the context state
  context.strokeStyle = "red";
  context.lineWidth = 10;
  context.moveTo(30, 70); // the start point of linex,y
  context.lineTo(130, 70); //end point of line c,y
  context.stroke(); //connect the points to draw the line
};
