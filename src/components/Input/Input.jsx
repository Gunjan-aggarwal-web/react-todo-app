const Input = ({changeHandler,value,enterKeyHandler}) => {
  return (
    <input type="text" onChange={(e)=>changeHandler(e.target.value)} value={value} onKeyUp={(e)=>{
        if(e.key=="Enter"){
            enterKeyHandler("pressed")
        }
    }}/>
  )
}

export default Input;