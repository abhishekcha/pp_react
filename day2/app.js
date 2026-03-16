const domRoot=document.getElementById("root");
const ReactRoot=ReactDOM.createRoot(domRoot);
const item1=React.createElement("li",{},"shruti");
const item2=React.createElement("li",{},"Rupali");
const newListContainer=React.createElement("ul",{},item1,item2);

ReactRoot.render(newListContainer);