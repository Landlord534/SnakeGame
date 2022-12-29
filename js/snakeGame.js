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

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("keyleft", keyLeftHandler, false);
document.addEventListener("keyright", keyRightHandler, false);

function keyDownHandler(e) {
    if (snake.direction != "Up") {
        snake.direction = "Down";
    }
}

function keyUpHandler(e) {
    if (snake.direction != "Down") {
        snake.direction = "Up";
    }
}

function keyLeftHandler(e) {
    if (snake.direction != "Right") {
        snake.direction = "Left";
    }
}

function keyRightHandler(e) {
    if (snake.direction != "Left") {
        snake.direction = "Right";
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    playground.drawStepGrid();
    snake.draw();
    snake.move();
}

setInterval(draw, 1000);

draw();