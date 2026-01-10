"use client"

import { useEffect, useState } from "react";


const Statistics = () => {
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(0);

    const updateData = (e: Event ) => {
        const data = e as CustomEvent;
        setWpm(data.detail.wpm);
        setAccuracy(data.detail.accuracy);
    }

    useEffect(() => {
      window.addEventListener("game-stats-update", updateData);
    
      return () => {
        window.removeEventListener("game-stats-update", updateData)
      }
    }, [])
    
  return (
    <div className="grid grid-cols-3 md:flex md:self-start md:justify-start w-full divide-x divide-neutral-700">
         <p  className="text-neutral-400 md:text-xl flex flex-col md:flex-row items-center md:px-4 md:first:pl-0 gap-2">
            {"WPM"} 

            <span className="font-bold text-2xl text-neutral-0">{wpm}</span>
        </p>

        <p  className="text-neutral-400 md:text-xl flex flex-col md:flex-row items-center md:px-4 md:first:pl-0 gap-2">
            {"Accuracy"} 

            <span className="font-bold text-2xl text-neutral-0">{accuracy}</span>
        </p>
    </div>
  )
}

export default Statistics