var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var stopButton = document.getElementById("stop");
var circleButton = document.getElementById("circle");
var bounceButton = document.getElementById("bounce");

var requestId;

ctx.fillStyle = "lightsteelblue";

var circle = function() {

  stop();

  var radius = 100;
  var x = canvas.width / 2;
  var y = canvas.height / 2;
  var growing = 1;

  var drawCircle = function() {
    clear();
    ctx.arc(x, y, radius, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();

    requestId = window.requestAnimationFrame(drawCircle);
    radius += 1 * growing;

    if (radius <= 0 || radius >= 200) {
      growing = -growing;
    }
  }

  drawCircle();
}

var bounce = function() {

  stop();

  var radius = 50;
  var x = canvas.width / 2;
  var y = canvas.height / 2;
  var dx = 2;
  var dy = 1;

  var drawBounce = function() {
    clear();
    ctx.arc(x, y, radius, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();

    requestId = window.requestAnimationFrame(drawBounce);

    x += dx;
    y += dy;
    console.log(x + ', ' + y);

    if (x >= canvas.width - radius || x <= radius) {
      dx = -dx + (Math.random() - 0.5);
    }
    if (y >= canvas.height - radius || y <= radius) {
      dy = -dy + (Math.random() - 0.5);
    }
  }

  drawBounce();
}

var clear = function() {
  ctx.clearRect(0, 0, canvas.height, canvas.width);
  ctx.beginPath();
}

var stop = function() {
  window.cancelAnimationFrame(requestId);
}

circleButton.addEventListener('click', circle);
bounceButton.addEventListener('click', bounce);
stopButton.addEventListener('click', stop);
