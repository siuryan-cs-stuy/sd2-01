var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var stopButton = document.getElementById("stop");
var animateButton = document.getElementById("animate");

var requestId;

ctx.fillStyle = "lightsteelblue";

var animate = function() {

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

var clear = function() {
  ctx.clearRect(0, 0, canvas.height, canvas.width);
  ctx.beginPath();
}

var stop = function() {
  window.cancelAnimationFrame(requestId);
}

animateButton.addEventListener('click', animate);
stopButton.addEventListener('click', stop);
