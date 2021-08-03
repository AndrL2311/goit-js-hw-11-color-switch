const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body"),
};

let timerId = null;

//По умолчанию вешаем слушателя на кнопку Start кнопка Stop не активна
refs.btnStart.addEventListener("click", onClickBtnStart);
refs.btnStop.disabled = true;

//Функция обработки нажатия на кнопку Start
function onClickBtnStart() {
  // console.log("Click Start");
  timerId = setInterval(colorSwitch, 1000, 1000);

  refs.btnStop.disabled = false;
  refs.btnStop.addEventListener("click", onClickBtnStop);

  refs.btnStart.disabled = true;
  refs.btnStart.removeEventListener("click", onClickBtnStart);
}
//Функция обработки нажатия на кнопку Stop
function onClickBtnStop() {
  // console.log("Click Stop");
  clearInterval(timerId);

  refs.btnStart.disabled = false;
  refs.btnStart.addEventListener("click", onClickBtnStart);

  refs.btnStop.disabled = true;
  refs.btnStop.removeEventListener("click", onClickBtnStop);
}
// Функция изменения цвета фона
function colorSwitch() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}
