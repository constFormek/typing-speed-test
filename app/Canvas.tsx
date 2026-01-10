"use client"

import { CanvasRenderer } from "@/lib/CanvasRenderer";
import { DEFAULT_ENGINE_CONFIG } from "@/lib/constants";
import { GameSession } from "@/lib/GameSession";
import { TextEngine } from "@/lib/TextEngine";
import { useRef, useEffect, useState } from "react"

interface CanvasProps {
  userInput: string,
  timeLimit: number,
  targetText: string,
}

const Canvas = ({userInput, timeLimit, targetText}: CanvasProps ) => {
  const [canvasSize, setCanvasSize] = useState<{width: number, height: number}>({width: 800, height: 500});
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<TextEngine | null>(null);
  const sessionRef = useRef<GameSession | null>(null);
  const rendererRef = useRef<CanvasRenderer | null>(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>{
      const entry = entries[0];

      setCanvasSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
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
      if (canvasSize.width <= 640) fontSize = 32;

      const font = `normal sora ${fontSize}px`

      if (ctx) {
        engineRef.current = new TextEngine({
          ...DEFAULT_ENGINE_CONFIG,
          ctx,
          targetText,
          canvasSize,
          font
        })
      }

      console.log(targetText)
      
    }
  }, [canvasSize, targetText, timeLimit])


  return (
    <canvas width={canvasSize.width} height={canvasSize.height} className="border-white/20 border-y w-full object-contain" ref={canvasRef}/>  
  )
}

export default Canvas