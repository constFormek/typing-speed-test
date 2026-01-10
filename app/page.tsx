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
        <>
          <Input handleChange={handleChange}/>

          <Canvas targetText="był rok 2012 pierwsze wąsy prawojazdy, w oczach jeszcze iskierki nadzieji zanim zbladły zanim zgasły. Idę rano po solpadeine stoi podstać jej głowa jest w dymie zwykle są tu staruszki i starcy, nie sądziłem że spotkam dziewczynę. Ona stała w łapie dwa szlugi, pierwszy zgasł, więc zapala drugi, dym rozmywa się na momencik, ta się na mnie gapi jak kubrick" timeLimit={20} userInput={userInput}/>

        <h1>{userInput}</h1>
        </>
  );
}
