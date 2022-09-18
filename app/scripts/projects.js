const projects = [
  "/app/pages/projects/momentum.html",
  "/app/pages/projects/tanks.html",
];
const display = document.getElementById("display");
let index = 0;
function forward() {
  if (index + 1 < projects.length) {
    index++;
  } else {
    index = 0;
  }
  display.setAttribute("src", projects[index]);
}

function backward() {
  if (index > 0) {
    index--;
  } else {
    index = projects.length - 1;
  }
  display.setAttribute("src", projects[index]);
}

