import { useState } from "react";

const App=()=>{
  const [text,setText]=useState(()=>{
    const val=localStorage.getItem("my-text")
    if(val){
      return val;
    }
    else{
      return "hello";
    }
  });

  const handleChange=(e)=>{
    const val=e.target.value;
    setText(e.target.value);
    localStorage.setItem("my-text",val)
  }
  return(
    <div>
      <input onChange={handleChange} value={text}></input>
      <p>{text}</p>
    </div>
  )
} 
export default App;