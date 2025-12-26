"use client"

import { STARTING_POS_X, STARTING_POS_Y } from "@/lib/constants";
import { RenderText } from "@/lib/draw";
import { MOCK_TEXT } from "@/mock";
import { useRef, useEffect } from "react"

const Canvas = ({userInput}: {userInput: string}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.clearRect(0,0, canvas.width, canvas.height); 

        const drawArgs = {
           ctx: ctx,
           targetText: MOCK_TEXT,
           userInput: userInput,
           font: "normal 24px sora"
        }
        RenderText(drawArgs);
      }
    }
  }, [userInput])
  return (
    <canvas width={800} height={800} className="border-white/20 border" ref={canvasRef}/>    
  )
}

export default Canvas