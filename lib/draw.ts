import { WORD_SPACING, LINE_SPACING, MAX_TEXT_WIDTH } from "./constants";


interface drawProps {
    ctx: CanvasRenderingContext2D,
    baseX: number,
    baseY: number,
    targetText: string,
    userInput: string,
    fillColor?: string,
    font?: string
}

export const RenderText = ({ctx, baseX, baseY, targetText, userInput, fillColor = "#f0f0f0", font = "bold 48px serif"}: drawProps) => {
    let x = baseX;
    let y = baseY;

    const charList = [];
    const wordsArr = targetText.split(/\s/);
    console.log(wordsArr)

    ctx.font = font;

    for (let i = 0; i < wordsArr.length; i++) {
        const word = wordsArr[i];
        const wordWidth = ctx.measureText(word).width;

        if ((x + wordWidth + WORD_SPACING  > MAX_TEXT_WIDTH) && i !== 0) {
            if (i != 0) {
                charList.push({
                    content: " ",
                    x: x,
                    y: y,
                })

                x += ctx.measureText(" ").width;
            } 
            
            x = baseX;
            y += LINE_SPACING;
            
        } else {
            if (i != 0) {
                charList.push({
                    content: " ",
                    x: x,
                    y: y,
                })

                x += ctx.measureText(" ").width;
            } 
        }

        for (let j = 0; j < word.length; j++) {
            const char = {
                content: word[j],
                    x: x,
                    y: y,
                }

            x += ctx.measureText(char.content).width;

            charList.push(char);
        }

    }

    for (let i = 0; i < charList.length; i++) {
        if (i >= userInput.length) {
            ctx.fillStyle = fillColor;
            
        } else {
            if (userInput[i] === charList[i].content) {
                ctx.fillStyle = "#4dd67b";
            } else if (charList[i].content !== userInput[i]) {
                ctx.fillStyle = "#d64d6b";
            }
        }
        
        ctx.fillText(charList[i].content, charList[i].x, charList[i].y);
    }
}


export default RenderText;