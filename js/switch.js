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
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.btnStart.addEventListener("click", onClickBtnStart);
refs.btnStop.addEventListener("click", onClickBtnStop);

function onClickBtnStart() {
  setInterval();
  console.log("Click Start");
}

function onClickBtnStop() {
  console.log("Click Stop");
}
