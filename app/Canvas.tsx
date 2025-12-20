"use client"

import { STARTING_POS_X, STARTING_POS_Y } from "@/lib/constants";
import draw from "@/lib/draw";
import { MOCK_TEXT } from "@/mock";
import { charInterface } from "@/types/types";
import { useRef, useEffect } from "react"

const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.clearRect(0,0, canvas.width, canvas.height); 
        ctx.font = "normal 12px serif";

        let currentX = STARTING_POS_X;
        let currentY = STARTING_POS_Y;
        const letterSpacing = 3;

        const tempCharList: charInterface[] = [];

        for (let i = 0; i < MOCK_TEXT.length; i++) {
          const charWidth = ctx.measureText(MOCK_TEXT[i]).width;
          currentX += charWidth + letterSpacing;

          const newChar: charInterface = {
            content: MOCK_TEXT[i],
            x: currentX,
            y: currentY,
            status: "idle",
            id: i,
          } 

          tempCharList.push(newChar);
        }

        const drawArgs = {
           ctx: ctx,
           baseX: STARTING_POS_X,
           baseY: STARTING_POS_Y,
           text: MOCK_TEXT,
        }
        draw(drawArgs);
      }
    }
  }, [])
  return (
    <canvas width={800} height={800} className="border-white/20 border" ref={canvasRef}/>    
  )
}

export default Canvas