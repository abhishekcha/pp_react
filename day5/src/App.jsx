import React, { useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0);
  const handleIncre = () => {
    // setCounter(counter+1);
    setCounter((prev)=>{
      return prev+1;
    })
  }
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={handleIncre}>++</button>
      </div>
    );
  };
export default App;
