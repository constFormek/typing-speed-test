import { charType } from "@/types/types";

interface TextEngineConfig {
    targetText: string,
    startingX: number,
    startingY: number,
    ctx: CanvasRenderingContext2D
    font: string,
    canvasSize: {
        width: number,
        height: number,
    },
    wordSpacing: number,
    letterSpacing: number,
    lineHeight: number,
} // starter settings

export class TextEngine {
    private config: TextEngineConfig

    public charsList: charType[] = [];
    public x: number = 0;
    public y: number = 0;



    constructor(config: TextEngineConfig) {
        this.config = config;
        this.x = this.config.startingX;
        this.y = this.config.startingY;

        this.calculatePositions();
    }

    private calculatePositions = () => {
        const { targetText, startingX, letterSpacing, wordSpacing, canvasSize, lineHeight, ctx, font } = this.config;

        const wordsArr = targetText.split(/(\s)/);
        const canvasPadding = 2 * startingX;
        const maxWidth = canvasSize.width - canvasPadding;
        ctx.font = font;

        for (let i = 0; i < wordsArr.length; i++) {
            const word = wordsArr[i];

            if (word == "\n") {
                this.x = startingX;
                this.y += lineHeight;
            } else {
                const wordWidth = ctx.measureText(word).width;

                const newX = this.x + wordSpacing + wordWidth;

                if (newX >= maxWidth) {
                    if (word == " ") continue;
                    this.x = startingX;
                    this.y += lineHeight;
                } 


                for (let j = 0; j < word.length; j++) {
                    const charWidth = ctx.measureText(word[j]).width;
                    const char: charType = {
                        char: word[j],
                        x: this.x,
                        y: this.y,
                        width: charWidth,
                    }

                    this.x += charWidth + letterSpacing

                    this.charsList.push(char);
                }
            }   
        }

        return this.charsList;
    }
}
