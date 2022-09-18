var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
const body = document.body;
let width = window.innerWidth / 40;
let height = window.innerHeight / 5;
let radius = (window.innerHeight + window.innerWidth)/100;
ctx.fillStyle = "#ABEBD2";

canvas.width = window.outerWidth;
canvas.height = window.innerHeight - body.scrollHeight;

ctx.fillRect(0, 0, canvas.width, canvas.height);
addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - body.scrollHeight;
   radius = (window.innerHeight + window.innerWidth)/100;

  p1 = new paddle(10, canvas.height / 2 - height / 2);
  p2 = new paddle(canvas.width - width - 10, canvas.height / 2 - height / 2);
  bll = new ball(canvas.width / 2, canvas.height / 2);

  width = canvas.width / 40;
  if (width < 20) {
    width = 20;
  }
  height = canvas.height / 5;
  if (height < 50) {
    height = 50;
  }
});

class paddle {
  constructor(x, y) {
    this.y = y;
    this.x = x;
  }
  show() {
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(this.x, this.y, width, height);
  }
}
class ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = radius;
    if (Math.random() >= 0.5) {
      this.vx = -8;
    } else {
      this.vx = 8;
    }
    this.vy = 5 * Math.random() * 2 - 1;
  }
  show() {
    ctx.fillStyle = "#f8fafc";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fill();
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }
  collide() {
    if (this.x + this.r > canvas.width - 10 - width) {
      this.vx = -this.vx;
    } else if (this.x - this.r < 10 + width) {
      this.vx = -this.vx;
    }
    if (this.y + this.r > canvas.height) {
      this.vy = -this.vy;
    } else if (this.y - this.r < 0) {
      this.vy = -this.vy;
    }
  }
}

let p1 = new paddle(10, canvas.height / 2 - height / 2);
let p2 = new paddle(canvas.width - width - 10, canvas.height / 2 - height / 2);
let bll = new ball(canvas.width / 2, canvas.height / 2);

p1.show();
p2.show();
bll.show();

function playGame() {
  ctx.fillStyle = "#ABEBD2";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  bll.move();
  bll.show();
  p1.show();
  p2.show();
  bll.show();
  bll.collide();
  p1.y = bll.y - height / 2;
  p2.y = bll.y - height / 2;
  for (let i = 0; i < canvas.height / 40; i++) {
    ctx.fillRect(canvas.width / 2-3, i * 40,canvas.width/300, 30);
  }
  ctx.font = (canvas.width/18 + "px Arial");
  ctx.textAlign = "center";
  ctx.fillText("Skudunter LLC", canvas.width / 2 - canvas.width/12.5, canvas.height / 2);
  requestAnimationFrame(playGame);
}

requestAnimationFrame(playGame);
