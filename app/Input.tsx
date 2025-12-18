"use client"

import { useRef, useEffect, useState } from "react"

const text = "Siemanko czesc, to test na program ktory pisze wlasnie teraz samemu moze z odrobinka pomocy hihihi." // placeholder

const STARTING_POS_X = 100;
const STARTING_POS_Y = 100;

const Input = () => {
    const [input, setInput] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const draw = (ctx: CanvasRenderingContext2D) => { // change name to something more logic
      const x = STARTING_POS_X;
      const y = STARTING_POS_Y;

      ctx.font = "bold 48px serif";

      for (let i = 0; i < text.length; i++) {
        const currChar = text[i];
        const newX = x + ctx.measureText(currChar).width;

        switch (currChar) {
          case input:
            
            break;
        
          default:
            break;
        }

        ctx.fillText(input, newX, y);
      }
      
    }

    useEffect(() => {
        if (inputRef.current) {
        inputRef.current.focus();
      }
    }, [])

    useEffect(() => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        if (ctx) {
          
        ctx.clearRect(0,0, canvas.width, canvas.height); // board
          draw(ctx);
        }
      }
    }, [input])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
    }

    
  return (
    <div>
        <input className="sr-only" ref={inputRef} onChange={handleChange}/>

        <canvas ref={canvasRef}/>    
    </div>
  )
}

export default Input