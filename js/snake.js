import { SnakePiece } from "./snakePiece.js";

export class Snake {
    snakePieces = [];
    startPiecesNumber = 3;
    direction = "Right";

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

    move() {
        const headIndex = 0;
        for(let i = this.snakePieces.length - 1; i > 0; i--) {
            this.snakePieces[i].x = this.snakePieces[i - 1].x;
            this.snakePieces[i].y = this.snakePieces[i - 1].y;
        }

        switch(this.direction) {
            case "Right": 
                this.snakePieces[headIndex].x += this.blockSize;
                break;
            case "Left": 
                this.snakePieces[headIndex].x -= this.blockSize;
                break;
            case "Up":
                this.snakePieces[headIndex].y -= this.blockSize;
                break;
            case "Down":
                this.snakePieces[headIndex].y += this.blockSize;
                break;
        }
    }
}