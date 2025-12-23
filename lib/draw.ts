import { WORD_SPACING, LINE_SPACING, MAX_TEXT_WIDTH, STARTING_POS_X, STARTING_POS_Y } from "./constants";


interface drawProps {
    ctx: CanvasRenderingContext2D,
    targetText: string,
    userInput: string,
    fillColor?: string,
    font?: string
}

export const RenderText = ({ctx, targetText, userInput, fillColor = "#f0f0f0", font = "bold 48px serif"}: drawProps) => {
    let x = STARTING_POS_X
    let y = STARTING_POS_Y

    const charList = [];
    const wordsArr = targetText.split(/\s/);
    const spaceWidth = ctx.measureText(" ").width;

    ctx.font = font;

    for (let i = 0; i < wordsArr.length; i++) {
        const word = wordsArr[i];
        const wordWidth = ctx.measureText(word).width;

        if ((x + wordWidth + WORD_SPACING > MAX_TEXT_WIDTH) ) {
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

                x += spaceWidth
            }
        }

        for (let j = 0; j < word.length; j++) {
            const charWidth = ctx.measureText(word[j]).width;
            const char = {
                content: word[j],
                x: x,
                y: y,
                w: charWidth
            }

            x += charWidth + 2;

            charList.push(char);
        }
    }

    for (let i = 0; i < charList.length; i++) {
        if (i == userInput.length) {
            const w = charList[i].w + 5;
            const x = charList[i].x - 2.5;
            const y = charList[i].y - 20;
            const h = 25;
            

            ctx.fillStyle = "#d9d9d988";
            ctx.beginPath();
            ctx.roundRect(x,y,w,h,2);

            ctx.fill();
        }

        if (i >= userInput.length) {
            ctx.fillStyle = fillColor;
        } else {
            if (userInput[i] == charList[i].content) ctx.fillStyle = "#4dd67b"; 
            else if (charList[i].content != userInput[i]) ctx.fillStyle = "#d64d6b";
            if (userInput[i] == "-" && charList[i].content == "—") ctx.fillStyle = "#4dd67b";
        }

        ctx.fillText(charList[i].content, charList[i].x, charList[i].y);
    }
}
 

export default RenderText;