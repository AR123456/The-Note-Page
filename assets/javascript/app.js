window.onload = function() {
  // variables
  let canvas = document.getElementById("bouncing-ball-canvas");
  let context = canvas.getContext("2d");

  // the ball
  let ballX = 400;
  let ballY = 300;
  let ballRadius = 30;
  let ballColor = "orange";
  // for update
  let changeX = 4;
  let changeY = 4;

  window.requestAnimationFrame(animationLoop);

  // the animation
  function animationLoop() {
    // clear the canvas- clear
    context.clearRect(0, 0, canvas.clientWidth, canvas.height);
    //update - what the animation is
    // if the ball hits the edge of the canvas bounce back into the visiable canvas
    //bottom edge
    if (ballY + ballRadius > canvas.height) {
      changeY *= -1;
    }
    //right edge
    if (ballX + ballRadius > canvas.width) {
      changeX *= -1;
    }
    ///top edge
    if (ballY - ballRadius < 0) {
      changeY *= -1;
    }
    //left edte
    if (ballX - ballRadius < 0) {
      changeX *= -1;
    }
    ballX += changeX;
    ballY += changeY;
    //call the  drawBall function- draw
    drawBall(ballX, ballY, ballRadius, ballColor);
    // calls itself- Animate
    window.requestAnimationFrame(animationLoop);
  }

  //draw the ball
  function drawBall(x, y, radius, color) {
    let radian = Math.PI / 100;
    context.beginPath();
    context.strokeStyle = color;
    context.fillStyle = color;
    context.arc(x, y, radius, 0, 360 * radian, false);
    context.stroke();
    context.fill();
  }

  // setting up frame animations for all browsers
  window.requestAnimationFrame = (function() {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();
};
