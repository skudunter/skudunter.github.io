const projects = [
  "/app/pages/projects/momentum.html",
  "/app/pages/projects/tanks.html",
];
const display = document.getElementById("display");
let index = 0;
function forward() {
   display.className =
     "absolute m-auto h-full w-4/6 p-8 right-17% bg-center bg-tersiary rounded-3xl transition ease-in-out duration-1000";
  display.style.opacity = 0;
  if (index + 1 < projects.length) {
    index++;
  } else {
    index = 0;
  }
  display.setAttribute("src", projects[index]);
  setInterval(() => {
    display.className =
      "absolute m-auto inline h-full w-4/6 p-8 right-17% bg-center bg-tersiary rounded-3xl transition ease-in-out duration-1000";
    display.style.opacity = 1;
  },0);
}

function backward() {
  display.className =
    "absolute m-auto  h-full w-4/6 p-8 right-17% bg-center bg-tersiary rounded-3xl transition ease-in-out duration-1000";
  display.style.opacity = 0;
  if (index > 0) {
    index--;
  } else {
    index = projects.length - 1;
  }
  display.setAttribute("src", projects[index]);
  setInterval(() => {
    display.className =
      "absolute m-auto inline h-full w-4/6 p-8 right-17% bg-center bg-tersiary rounded-3xl transition ease-in-out duration-1000";
    display.style.opacity = 1;
  },0);
}

