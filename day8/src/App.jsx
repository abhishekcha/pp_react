import { useEffect, useState } from "react";

const App=()=>{
  const [count,setCount]=useState(0);
  console.log("component re-render");
  useEffect(()=>{
    console.log("hello shruti");
    return ()=>{
      console.log("GoodDay",count);
      
    }
  });
  return(
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>
  )
}
export default App;
// output is- component re-render
// App.jsx:9 GoodDay 0
// App.jsx:7 hello shruti