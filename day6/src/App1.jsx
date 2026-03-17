import { useState } from "react";
const App = () => {
  const [monitor, controller] = useState("anjali"); // return array
  const handleUsername = (e) => {
    const val = e.target.value;
    console.log("val:", val);
    controller(val);
    console.log("username is-",monitor);
    
    // react use one way data binding
  };
  return (
    <div>
      <input type="text" onKeyUp={handleUsername} />
      <h2>{monitor}</h2>
    </div>
  );
};
export default App;