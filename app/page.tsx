"use client"

import Input from "./Input";
import Canvas from "./Canvas";

import { useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  }
  return (
        <div className="grid place-items-center w-screen h-screen  ">
          <Input handleChange={handleChange}/>

          <Canvas userInput={userInput}/>

        <h1>{userInput}</h1>
    </div>
  );
}
