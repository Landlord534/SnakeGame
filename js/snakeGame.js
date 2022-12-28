import { Playground } from "./playground.js";
import { Snake } from "./snake.js";

const canvas = document.getElementById("snakeGameCanvas");
const context = canvas.getContext("2d");
const stepLengthRation = 0.05;
const blockSize = stepLengthRation * canvas.width;
const centerPointX = (canvas.width / blockSize) / 2 * blockSize;
const centerPointY = centerPointX;

const playground = new Playground(context, canvas.width, canvas.clientHeight, blockSize);
const snake = new Snake(context, blockSize, centerPointX, centerPointY);

function draw() {
    playground.drawStepGrid();
    snake.draw();

}

draw();