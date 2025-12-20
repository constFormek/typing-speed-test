"use client"

import { charInterface } from "@/types/types";
import { useRef, useEffect, useState } from "react"
import Canvas from "./Canvas";

const Input = () => {
  const [input, setInput] = useState<string>("");
  const [charList, setCharList] = useState<charInterface[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus(); 
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  return (
    <div className="grid place-items-center w-screen h-screen  ">
        <input className="sr-only" ref={inputRef} onChange={handleChange}/>

        <Canvas />

        <h1>{input}</h1>
    </div>
  )
}

export default Input