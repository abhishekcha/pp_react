const domRoot=document.getElementById("root");
const newListContainer=document.createElement("ul");
domRoot.appendChild(newListContainer);

const item1=document.createElement("li");
item1.innerText="anjali";
const item2=document.createElement("li");
item2.innerText="chaudhary"
newListContainer.appendChild(item1);
newListContainer.appendChild(item2);
