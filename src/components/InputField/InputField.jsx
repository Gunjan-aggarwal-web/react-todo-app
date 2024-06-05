import { useState } from "react"

const InputField = () => {
    const[item,setItem]=useState("")
  return (
    <>
    <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}/>
    <p>{item}</p>
    </>
  )
}

export default InputField