import { useState,useEffect} from "react";
const App=()=>{
  const [recipesArr,setRecipesArr]= useState([]);
  const getData=async()=>{
    try {
      const response=await fetch("https://dummyjson.com/recipes");
      const data=await response.json();
      console.log(data.recipes);
      setRecipesArr(data.recipes);
    } catch (error) {
      alert(`Api Error: ${error.message}`);
    }
  };
  useEffect(()=>{
    getData();
},[]);
  return(
    <div>
      <h1>Recipes...</h1> 
      {
        recipesArr.map((ele)=>{
          return(
            <div key={ele.id}>
              <h3>{ele.name}</h3>
              <p>{ele.cuisine}</p>
            </div>
          )
        })
      }
    </div>
  )
}
export default App;