import React from "react";
import ReactDOM from "react-dom/client";
const domRoot=document.getElementById("root");
const reactRoot=ReactDOM.createRoot(domRoot);

const App=()=>{
    return(
        <div>
            <h1>hello shurti shukla</h1>
        </div>
    );
};
reactRoot.render(App());