// window.onload = function() {
//   // Definitions
//   var canvas = document.getElementById("polygon-canvas");
//   var context = canvas.getContext("2d");

//   // Polygon Variables
//   var sides = 7;
//   var radius = 100;
//   var centerX = 200;
//   var centerY = 400;
//   var startAngle = 200;
//   var angle = (2 * Math.PI) / sides;

//   // Start Drawing
//   context.beginPath();
//   context.strokeStyle = "red";
//   context.lineWidth = 5;
//   context.lineJoin = "round";

//   // Begining Point Coordinates
//   var beginX = centerX + radius * Math.cos(startAngle);
//   var beginY = centerY - radius * Math.sin(startAngle);

//   context.moveTo(beginX, beginY);

//   // Draw Lines
//   for (var i = 1; i <= sides; i++) {
//     // Current point'S coordinates
//     var currentAngle = startAngle + i * angle;
//     var currentPointX = centerX + radius * Math.cos(currentAngle);
//     var currentPointY = centerY - radius * Math.sin(currentAngle);

//     // Draw the line
//     context.lineTo(currentPointX, currentPointY);
//   }

//   context.closePath(); // to close paths manually
//   context.stroke();
// };

//another more elegant way from   http://scienceprimer.com/drawing-regular-polygons-javascript-canvas
window.onload = function() {
  var canvas = document.getElementById("polygon-canvas");
  var cxt = canvas.getContext("2d");
  // hexagon
  var numberOfSides = 6,
    size = 200,
    Xcenter = 250,
    Ycenter = 250;

  cxt.beginPath();
  cxt.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

  for (var i = 1; i <= numberOfSides; i += 1) {
    cxt.lineTo(
      Xcenter + size * Math.cos((i * 2 * Math.PI) / numberOfSides),
      Ycenter + size * Math.sin((i * 2 * Math.PI) / numberOfSides)
    );
  }

  cxt.strokeStyle = "#000000";
  cxt.lineWidth = 1;
  cxt.stroke();
};
