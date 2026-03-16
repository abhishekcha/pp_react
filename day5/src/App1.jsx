import React, { useState } from "react";
const App=()=>{
  const [monitor,remote]=useState();// give me state var
  const handleSearch=(e)=>{
    const val=e.target.value;
    remote(val);// update the value of monitor
  }
  return(
    <div>
      <h2>Hello Shruti</h2>
      <input type="text" onKeyUp={handleSearch} />
      <h2>{monitor}</h2>
    </div>
  )
}