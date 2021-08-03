const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body"),
};

let timerId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.btnStart.addEventListener("click", onClickBtnStart);
refs.btnStop.addEventListener("click", onClickBtnStop);
refs.btnStop.disabled = true;

function onClickBtnStart() {
  timerId = setInterval(colorSwitch, 1000, 1000);
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
  console.log("Click Start");
}

function onClickBtnStop() {
  console.log("Click Stop");
  clearInterval(timerId);
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
}

function colorSwitch() {
  console.log("Color Switch", colors[randomIntegerFromInterval(0, 5)]);
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
}
