import { useState } from "react";
const App=()=>{
  const [users,setUser]=useState([
    {
      username:"abhishek",
      city:"varanasi",
      email:"abhishek0221997@gmail.com"
    }
  ])
  console.log(users);
  const handleSubmit=(e)=>{
    e.preventDefault();

    const name=e.target.username.value;
    const city=e.target.city.value;
    const email=e.target.email.value;
    if(name.length<=2){
      alert("invalid name");
    }else if(city.length<=1){
      alert("invalid city")
    }else if(email.length<5){
      alert("invalid email")
    }else{
      console.log("--------------success--------------");
      setUser((prev)=>{
        const newArr=[...prev];
        newArr.push({
          username:name,
          city,
          email,
        });
        return newArr;
      });
     
    }
  };
  return(
    <div>
      {
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" name="username" required />
          </div>
          <div>
            <input type="email" name="email" required />
          </div>
          <div>
            <input type="text" name="city" required />
          </div>
          <button>submit</button>
        </form>
      }
      <div>
        {
          users.map((ele)=>{
            return(
              <div>
                <h3>{ele.username}</h3>
                <p>{ele.email}</p>
                <h5>{ele.city}</h5>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default App;