import { WORD_SPACING, LINE_SPACING, MAX_TEXT_WIDTH } from "./constants";


interface drawProps {
    ctx: CanvasRenderingContext2D,
    baseX: number,
    baseY: number,
    text: string,
    fillColor?: string,
    font?: string
}

export const draw = ({ctx, baseX, baseY, text, fillColor = "#fff", font = "bold 48px serif"}: drawProps) => {
    let x = baseX;
    let y = baseY;

    const wordsArr = text.split(/\s/);
    console.log(wordsArr)

    ctx.fillStyle = fillColor;
    ctx.font = font;

    for (let i = 0; i < wordsArr.length; i++) {
        const word = wordsArr[i];
        const wordWidth = ctx.measureText(word).width;

        if ((x + wordWidth + WORD_SPACING  > MAX_TEXT_WIDTH) && i !== 0) {
            x = baseX;
            y += LINE_SPACING;
        } else {
            if (i != 0) {
                x += WORD_SPACING;
            } 
        }

        ctx.fillText(word, x, y);
        
        x += wordWidth
    }
}


export default draw;