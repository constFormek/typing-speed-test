import { WORD_SPACING, LINE_SPACING, STARTING_POS_X, STARTING_POS_Y } from "./constants";

interface drawProps {
    ctx: CanvasRenderingContext2D,
    targetText: string,
    userInput: string,
    canvasWidth: number,
    fillColor?: string,
    font?: string
}

export const RenderText = ({ctx, targetText, userInput, canvasWidth, fillColor = "#949497", font = "normal 12px sora", }: drawProps) => {
    let x = STARTING_POS_X
    let y = STARTING_POS_Y
    const MaxTextWidth = canvasWidth-STARTING_POS_X

    const charList = [];
    const wordsArr = targetText.split(/\s/);
    const spaceWidth = ctx.measureText(" ").width + 5;

    ctx.font = font;

    for (let i = 0; i < wordsArr.length; i++) {
        const word = wordsArr[i];
        const wordWidth = ctx.measureText(word).width;

        if ((x + wordWidth + WORD_SPACING > MaxTextWidth) ) {
            charList.push({
                content: " ",
                x: x,
                y: y,
                w: spaceWidth
            });
            x = STARTING_POS_X;
            y += LINE_SPACING;
        } else {
            if (i != 0) {
                charList.push({
                    content: " ",
                    x: x,
                    y: y,
                    w: spaceWidth
                })

                x += spaceWidth + 2.5
            }
        }

        for (let j = 0; j < word.length; j++) {
            const charWidth = ctx.measureText(word[j]).width;
            const char = {
                content: word[j],
                x: x,
                y: y,
                w: charWidth,
            }

            x += charWidth + 2.5;

            charList.push(char);
        }
    }

    for (let i = 0; i < charList.length; i++) {
        if (i == userInput.length) {
            const w = charList[i].w + 4;
            const x = charList[i].x - 2;
            const y = charList[i].y - 27;
            const h = 35

            ctx.fillStyle = "#262626";
            ctx.beginPath();
            ctx.roundRect(x,y,w,h,2);

            ctx.fill();
        }

        if (i >= userInput.length) {
            ctx.fillStyle = fillColor;
        } else {
            if (userInput[i] == charList[i].content) ctx.fillStyle = "#4dd67b"; 
            else if (charList[i].content != userInput[i]) {
                if (userInput[i] == "-" && charList[i].content == "—") ctx.fillStyle = "#4dd67b";
                else {
                    ctx.fillStyle = "#d64d6b";

                    const w = charList[i].w + 4;
                    const x = charList[i].x ;
                    const y = charList[i].y + 10;
                    const h = 2

                    ctx.beginPath();
                    ctx.roundRect(x,y,w,h,2);

                    ctx.fill();
                }
            }
            if (userInput[i] == "-" && charList[i].content == "—") ctx.fillStyle = "#4dd67b";
        }

        ctx.fillText(charList[i].content, charList[i].x, charList[i].y);
    }
}
 

export default RenderText;