window.onload = function() {
  // Definitions
  var canvas = document.getElementById("lab-complex-shapes-canvas");
  var ctx = canvas.getContext("2d");

  // heart
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;
  ctx.moveTo(430, 130);
  ctx.bezierCurveTo(470, 10, 670, 10, 670, 180);
  ctx.quadraticCurveTo(670, 380, 430, 520);
  ctx.quadraticCurveTo(190, 380, 190, 180);
  ctx.bezierCurveTo(190, 10, 400, 10, 430, 130);
  ctx.stroke();

  // right
  //drawBezierCurve(430, 130, 470, 10, 670, 10, 670, 180);
  //drawQuadraticCurve(670, 180, 670, 380, 430, 520);

  // left
  //drawBezierCurve(430, 130, 400, 10, 190, 10, 190, 180);
  //drawQuadraticCurve(190, 180, 190, 380, 430, 520);

  function drawQuadraticCurve(
    startX,
    startY,
    controlX,
    controlY,
    endX,
    endY,
    curveColor,
    curveWidth
  ) {
    var radian = Math.PI / 180;

    // Draw the quadratic curve
    ctx.beginPath();
    ctx.strokeStyle = curveColor || "red";
    ctx.lineWidth = curveWidth || 2;
    ctx.moveTo(startX, startY);
    ctx.quadraticCurveTo(controlX, controlY, endX, endY);
    ctx.stroke();

    // Draw the control point as a circle
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.arc(controlX, controlY, 5, 0 * radian, 360 * radian, false);
    ctx.stroke();

    // Draw the lines between control point and path
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(startX, startY);
    ctx.lineTo(controlX, controlY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }

  function drawBezierCurve(
    startX,
    startY,
    controlX1,
    controlY1,
    controlX2,
    controlY2,
    endX,
    endY,
    curveColor,
    curveWidth
  ) {
    var radian = Math.PI / 180;

    // Draw the bezier curve
    ctx.beginPath();
    ctx.strokeStyle = curveColor || "red";
    ctx.lineWidth = curveWidth || 2;
    ctx.moveTo(startX, startY);
    ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
    ctx.stroke();

    // Draw the control one point as a circle
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.arc(controlX1, controlY1, 5, 0 * radian, 360 * radian, false);
    ctx.stroke();

    // Draw the control two point as a circle
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.arc(controlX2, controlY2, 5, 0 * radian, 360 * radian, false);
    ctx.stroke();

    // Draw the lines between control points and path
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(startX, startY);
    ctx.lineTo(controlX1, controlY1);
    ctx.lineTo(controlX2, controlY2);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }
};
