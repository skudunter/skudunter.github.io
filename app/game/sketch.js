var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#ABEBD2";
ctx.fillRect(0, 0, canvas.width, canvas.height);
class paddle {
  constructor(x, y) {
    this.y = y;
    this.x = x;
    this.width = 50;
    this.height = 180;
  }
  show() {
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
class ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 30;
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
    if (this.x + this.r > canvas.width - 60) {
      this.vx = -this.vx;
    } else if (this.x - this.r < 60) {
      this.vx = -this.vx;
    }
    if (this.y + this.r > canvas.height) {
      this.vy = -this.vy;
    } else if (this.y - this.r < 0) {
      this.vy = -this.vy;
    }
  }
}

let p1 = new paddle(10, canvas.height / 2 - 120);
let p2 = new paddle(canvas.width - 60, canvas.height / 2 - 120);
let bll = new ball(canvas.width / 2 + 10, canvas.height / 2 - 50);
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
  p1.y = bll.y - 90;
  p2.y = bll.y - 90;
  for (let i = 0; i < canvas.height / 40; i++) {
    ctx.fillRect(canvas.width / 2 - 10, i * 40, 10, 30);
  }  
  ctx.font = "120px Arial";
  ctx.fillText("Skudunter LLC", canvas.width / 2 - 345, canvas.height / 2);
  requestAnimationFrame(playGame);
}

requestAnimationFrame(playGame);
