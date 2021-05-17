const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
body: document.querySelector("body"),
buttonStart: document.querySelector("button[data-action='start']"),
buttonStop: document.querySelector("button[data-action='stop']"),
}

const PROM_DELAY = 1000;
let intervalId = null;

refs.buttonStart.addEventListener('click', onChangeColour);
refs.buttonStop.addEventListener('click', offChangeColour);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onChangeColour(){  
  refs.buttonStart.disabled = true;
  intervalId = setInterval(() => {
      const positionColour = randomIntegerFromInterval(0, colors.length - 1);
      refs.body.style.backgroundColor = colors[positionColour];
  }, PROM_DELAY);
}

function offChangeColour(){
  refs.buttonStart.disabled = false;
  clearInterval(intervalId);
}