import { useState } from "react";
const App = () => {
  const [monitor, controller] = useState("anjali"); // return array
  const handleUsername = (e) => {
    const val = e.target.value;
    console.log("val:", val);
    controller(val);
    console.log("username is-",monitor);
    
    // react use one way data binding\
  };
   const handlePrint=(e)=>{
      console.log("print!!!");
      //e.preventDefault();
      e.stopPropagtion();
    }
  return (
    <div onClick={handlePrint}>
      <input type="text" onChange={handleUsername} value={monitor}/>
      <h2>{monitor}</h2>
      <button onClick={handlePrint}>click me</button>
    </div>
  );
};
export default App;