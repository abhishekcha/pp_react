const App=()=>{
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
      alert("success")
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
    </div>
  )
}
export default App;