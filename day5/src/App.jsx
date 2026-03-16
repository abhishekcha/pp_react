import React, { useState } from "react";
const App=()=>{
  const [monitor,remote]=useState();
  const handleSearch=(e)=>{
    const val=e.target.value;
    remote(val);
  }
  return(
    <div>
      <h2>Hello Shruti</h2>
      <input type="text" onKeyUp={handleSearch} />
      <h2>{monitor}</h2>
    </div>
  )
}
export default App;