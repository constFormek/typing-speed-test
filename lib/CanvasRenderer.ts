import { GameSession } from "./GameSession";
import { TextEngine } from "./TextEngine";

export class CanvasRenderer {
    private session;
    private engine;
    private ctx;
    
    constructor(ctx: CanvasRenderingContext2D, engine: TextEngine, session: GameSession) {
        this.session = session;
        this.engine = engine;
        this.ctx = ctx;
    }

    public draw = () => {
        const { charsList } = this.engine;
        const { userInput } = this.session;

        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height); 

        for (let i = 0; i < charsList.length; i++) {
            const char = charsList[i].char;
            const x = charsList[i].x;
            const y = charsList[i].y;

            const typedChar = userInput[i];

            if (userInput.length > i) {
                if ( typedChar == char || (typedChar == "-" && char == "—")) {
                this.ctx.fillStyle = "#4DD67B"
                } else {
                    this.ctx.fillStyle = "#D64D5B" // temporary
                }
            } else {
                this.ctx.fillStyle = "#949497" // temporary
            }
            

            this.ctx.fillText(char, x, y);
        }
    }
}