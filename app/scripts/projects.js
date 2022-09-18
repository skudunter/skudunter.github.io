const projects = [
  "/app/pages/projects/momentum.html",
  "/app/pages/projects/tanks.html",
];
const display = document.getElementById("display");
let index = 0;
function forward() {
  // display.className =
  //   "mx-auto w-9/12 h-full overflow-hidden transition-none ease-in-out duration-1000";
  display.style.opacity = 0;
  if (index + 1 < projects.length) {
    index++;
  } else {
    index = 0;
  }
  display.setAttribute("src", projects[index]);
  setInterval(() => {
    // display.className =
    //   "mx-auto w-9/12 h-full overflow-hidden transition ease-in-out duration-1000";
    display.style.opacity = 1;
  },0);
}

function backward() {
  // display.className =
  //   "mx-auto w-9/12 h-full overflow-hidden transition-none ease-in-out duration-1000";
  display.style.opacity = 0;
  if (index > 0) {
    index--;
  } else {
    index = projects.length - 1;
  }
  display.setAttribute("src", projects[index]);
  setInterval(() => {
    // display.className =
    //   "mx-auto w-9/12 h-full overflow-hidden transition ease-in-out duration-1000";
    display.style.opacity = 1;
  },0);
}

