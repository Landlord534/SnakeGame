export class Playground {
    constructor(context, playgroundWidth, playgroundHeight, blockSize) {
        this.context = context;
        this.playgroundWidth = playgroundWidth;
        this.playgroundHeight = playgroundHeight;
        this.blockSize = blockSize;
    }

    drawStepGrid() {
        for(let i = 0; i <= this.playgroundWidth; i += this.blockSize) {
            this.context.beginPath();
            this.context.moveTo(i, 0);
            this.context.lineTo(i, this.playgroundHeight);
            this.context.stroke();
        }
    
        for(let i = 0; i <= this.playgroundHeight; i += this.blockSize) {
            this.context.beginPath();
            this.context.moveTo(0, i);
            this.context.lineTo(this.playgroundWidth, i);
            this.context.stroke();
        }
    }
}
