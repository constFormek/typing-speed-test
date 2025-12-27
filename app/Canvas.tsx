"use client"

import { RenderText } from "@/lib/draw";
import { MOCK_TEXT } from "@/mock";
import { useRef, useEffect, useState } from "react"

const Canvas = ({userInput}: {userInput: string}) => {
    const [canvasSize, setCanvasSize] = useState<{w: number, h: number}>({w: 800, h: 500});
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
      const resizeObserver = new ResizeObserver((entries) =>{
        const entry = entries[0];

        setCanvasSize({
          w: entry.contentRect.width,
          h: entry.contentRect.height,
        })
      });

      if (canvasRef.current) {
        resizeObserver.observe(canvasRef.current);
      }

      return () => resizeObserver.disconnect();
    }, [])

    useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      let fontSize = 40;
      if (canvasSize.w <= 640) {
        fontSize = 32;
      }

      if (ctx) {
        ctx.clearRect(0,0, canvas.width, canvas.height); 

        const drawArgs = {
           ctx: ctx,
           targetText: MOCK_TEXT,
           userInput: userInput,
           canvasWidth: canvasSize.w,
           font: `normal ${fontSize}px sora`
        }
        RenderText(drawArgs);
      }
    }
  }, [userInput, canvasSize])

  
  return (
      <canvas width={canvasSize.w} height={canvasSize.h} className="border-white/20 border-y w-full object-contain" ref={canvasRef}/>  
  )
}

export default Canvas