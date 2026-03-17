import react from "react";
import { useState } from "react";

const App=()=>{
  const [monitor,controller]=useState("shruti");
  const handleUsername=(e)=>{
    controller(e.target.value);
  }
  return(
  <div>
    <input type="text" onChange={handleUsername} value={monitor}/>
    <h2>{monitor}</h2>
    <button>click me </button>
  </div>
)
}
export default App;
