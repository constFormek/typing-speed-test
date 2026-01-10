"use client"

import { useRef, useEffect } from "react"

const Input = ({handleChange}: {handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus(); 
  }, [])

  return (
    <input className="sr-only" ref={inputRef} onChange={handleChange}/>
  )
}

export default Input