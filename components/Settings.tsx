"use client"

import { useState } from "react"
const MobileSettings = [
    {
        label: "difficulty",
        options: ["easy", "medium", "hard"],
    },

    {
        label: "mode",
        options: ["timed(60s)", "Passage"] // maybe add more timer options ??
    }
]

const Settings = () => {
    const [activeSettings, setActiveSettings] = useState({
        "difficulty": "medium",
        "mode": "timed(60s)"
    })
  return (
    <div className="w-full flex items-center gap-4">
        {
            MobileSettings.map((setting, index) => (
                <button key={index} className="text-center w-full text-neutral-0 border-[1.5px] border-neutral-500 cursor-pointer rounded-lg px-2.5 py-1.5">
                    {activeSettings.difficulty}
                </button>
            ))
        }
    </div>
  )
}

export default Settings