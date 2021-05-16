const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const body = document.querySelector("body");
const buttom = document.querySelectorAll("button");

buttom[0].addEventListener('click', changeColour);

// buttom[0].addEventListener('click', handelButtonClickStart);
// buttom[1].addEventListener('click', handelButtonClickStop);

// const start =

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const intervalId = setInterval(() => {
    // changeColour()
}, 1000);


function changeColour() {
    const positionColour = randomIntegerFromInterval(0, 5);
    // console.log(colors[positionColour])    
    return body.style.backgroundColor = colors[positionColour];
    };
