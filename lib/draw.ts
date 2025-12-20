import { LETTER_SPACING, LINGE_SPACING, MAX_TEXT_WIDTH } from "./constants";


interface drawProps {
    ctx: CanvasRenderingContext2D,
    baseX: number,
    baseY: number,
    text: string,
    fillColor?: string,
    font?: string
}

export const draw = ({ctx, baseX, baseY, text, fillColor = "#fff", font = "bold 48px serif"}: drawProps) => {
    let newX = baseX;
    let newY = baseY;

    ctx.fillStyle = fillColor;
    ctx.font = font;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const charWidth = ctx.measureText(char).width;
        const charHeight = ctx.measureText(text).actualBoundingBoxAscent + ctx.measureText(text).actualBoundingBoxDescent

        ctx.fillText(char, newX, newY, MAX_TEXT_WIDTH);
        
        if (newX + charWidth > MAX_TEXT_WIDTH) {
            newX = baseX;
            newY += charHeight + LINGE_SPACING;
        } else {
            newX += charWidth + LETTER_SPACING;
        }
        
        
    }
}


export default draw;