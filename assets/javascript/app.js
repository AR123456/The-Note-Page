// making sure window loads before the canvas starts
window.onload = function() {
  // paramiters

  // arc(x.y, radius, startAngle, endAngle, counterClockWise )

  var canvas = document.getElementById("lab-complex-shapes-canvas");
  var ctx = canvas.getContext("2d");
  var ctx = canvas.getContext("2d");

  //angles are in radians
  var radian = Math.PI / 180;

  // First Arc
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 10;
  ctx.arc(100, 100, 50, 0 * radian, 180 * radian, false);
  ctx.stroke();

  // Second Arc
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 10;
  ctx.arc(300, 200, 50, 45 * radian, 130 * radian, false);
  ctx.stroke();

  // Third Arc
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.lineWidth = 10;
  ctx.arc(300, 100, 50, 45 * radian, 130 * radian, true);
  ctx.stroke();
};
