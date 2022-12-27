const canvas = document.getElementById("snakeGameCanvas");
export const ctx = canvas.getContext("2d");
const playgroundWidth = canvas.width;
const playgroundHeight = canvas.height;

const stepLengthRation = 0.05;
const stepLength = playgroundWidth * stepLengthRation;

export function drawStepGrid() {
    for(let i = 0; i <= playgroundWidth; i += stepLength) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, playgroundHeight);
        ctx.stroke();
    }

    for(let i = 0; i <= playgroundHeight; i += stepLength) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(playgroundWidth, i);
        ctx.stroke();
    }
}