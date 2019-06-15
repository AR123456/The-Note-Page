// making sure window loads before the canvas starts
window.onload = function() {
  // Declare variables
  var canvas = document.getElementById("pacman-canvas");
  var context = canvas.getContext("2d");
  var radian = Math.PI / 180;

  // using method - path by path
  context.beginPath();
  context.strokeStyle = "orange";
  context.lineWidth = 10;
  context.fillStyle = "orange";
  context.moveTo(250, 250);
  context.lineTo(330, 310);
  //make the circle with the arc function
  // context.arc(centerX, centerY, radius, startAngle, endAngle, antiClockwiseDirection);
  context.arc(250, 250, 100, 37 * radian, 323 * radian, false);
  //top lip
  context.lineTo(250, 250);

  context.stroke();
  context.fill();
  // adding pacman eye
  context.beginPath();
  context.fillStyle = "black";
  // context.arc(centerX, centerY, radius, startAngle, endAngle, antiClockwiseDirection);
  context.arc(250, 200, 10, 0 * radian, 360 * radian, false);
  context.stroke();
  context.fill();

  // pac man 2 drawn by filling the arc
  // first half circle
  context.beginPath();
  context.strokeStyle = "orange";
  context.lineWidth = 10;
  context.fillStyle = "orange";
  // context.arc(centerX, centerY, radius, startAngle, endAngle, antiClockwiseDirection);
  context.arc(600, 250, 100, 143 * radian, 323 * radian, false);
  context.stroke();
  context.fill();
  //second half circle
  context.beginPath();
  context.strokeStyle = "orange";
  context.lineWidth = 10;
  context.fillStyle = "orange";
  // context.arc(centerX, centerY, radius, startAngle, endAngle, antiClockwiseDirection);
  context.arc(600, 250, 100, 37 * radian, 217 * radian, false);
  context.stroke();
  context.fill();

  // adding pacman eye
  context.beginPath();
  context.fillStyle = "black";
  // context.arc(centerX, centerY, radius, startAngle, endAngle, antiClockwiseDirection);
  context.arc(600, 200, 10, 0 * radian, 360 * radian, false);
  context.stroke();
  context.fill();
};
