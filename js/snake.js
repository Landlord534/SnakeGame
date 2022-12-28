import { SnakePiece } from "./snakePiece.js";

export class Snake {
    snakePieces = [];
    startPiecesNumber = 3;

    constructor(context, blockSize, startX, startY) {
        this.context = context;
        this.blockSize = blockSize;
        this.startX = startX;
        this.startY = startY;

        for(let i = 0; i < this.startPiecesNumber; i++) {
            let snakePiece = new SnakePiece(startX - i * blockSize, startY);
            this.snakePieces.push(snakePiece);
        }
    }

    draw() {
        for(let i = 0; i < this.snakePieces.length; i++) {
            this.context.beginPath();
            this.context.rect(this.snakePieces[i].x, this.snakePieces[i].y, this.blockSize, this.blockSize);
            this.context.fillStyle = "green";
            this.context.fill();
            this.context.closePath();
        }
    }
}