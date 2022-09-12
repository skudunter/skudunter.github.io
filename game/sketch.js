var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#ABEBD2";
ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
class paddle {
  constructor(x, y) {
    this.y = y;
    this.x = x;
    this.width = 20;
    this.height = 100;
  }
  show() {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
class ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 20;
  }
  show() {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.fill();
  }
}
