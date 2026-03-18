import { useState } from "react";
const App = () => {
  const [fruit, setFruit] = useState([]);
  const handleFruit = (e) => {
    e.preventDefault();
    const fruitName = e.target.fruitName.value;
    console.log(e);
    
    setFruit((prev) => {
      const newArr = [...prev];
      newArr.push(fruitName);
      return newArr;
    });
  };
  return (
    <div>
      <form onSubmit={handleFruit}>
        <input type="text" placeholder="fruit_name" name="fruitName" required />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <div>
        {
          fruit.map((ele)=>{
            return(
              <div key={ele}>
                <p>{ele}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};
export default App;
