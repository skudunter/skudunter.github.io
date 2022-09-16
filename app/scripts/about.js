let canvas = document.getElementById("aboutCanvas");
let ctx = canvas.getContext("2d");
let startX;
let startY;
let endX;
let endY;

let deltaStartX;
let deltaStartY;
let deltaEndX;
let deltaEndY;

let r;
let g;
let b;

startX = Math.random() * 255;
startY = Math.random() * 255;
endX = Math.random() * 255;
endY = Math.random() * 255;

const range = 5;
deltaStartX = getRndInteger(-range, range);
deltaStartY = getRndInteger(-range, range);
deltaEndX = getRndInteger(-range, range);
deltaEndY = getRndInteger(-range, range);

r = Math.random() * 255;
g = Math.random() * 255;
b = Math.random() * 255;

canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight + 130;

for (let i = 0; i < 2; i++) {startSimulation()}

function startSimulation() {
  if (r > 255) {
    r = 255;
  } else if (r < 0) {
    r = 0;
  }
  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }
  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }
  // draw a line
  ctx.strokeStyle = rgbToHex(r, g, b);
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.closePath();
  ctx.lineTo(50, 50);
  // bezier(0, 0, startX, startY, endX, endY,canvas.clientWidth, canvas.clientHeight);

  // pick a new color
  r += getRndInteger(-5, 5);
  g += getRndInteger(-5, 5);
  b += getRndInteger(-5, 5);

  // move a bit
  startX += deltaStartX;
  startY += deltaStartY;
  endX += deltaEndX;
  endY += deltaEndY;

  if (startX < 0 || startX > canvas.width) {
    deltaStartX *= -1;
  }

  if (startY < 0 || startY > canvas.height) {
    deltaStartY *= -1;
  }

  if (endX < 0 || endX > canvas.width) {
    deltaEndX *= -1;
  }

  if (endY < 0 || endY > canvas.height) {
    deltaEndY *= -1;
  }
  requestAnimationFrame(startSimulation);
}

function getRndInteger(min, max) {
  return Math.random() * (max - min) + min;
}

function rgbToHex(r, g, b) {
  let q, w, l;
  q = Math.floor(r).toString(16);
  w = Math.floor(g).toString(16);
  l = Math.floor(b).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + q + w + l;
}
requestAnimationFrame(startSimulation);
