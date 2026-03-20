import { useNavigate } from "react-router";
import { Navbar } from "../components/NavBar";
import styles from "../pages/HomePage.module.css";
import { useEffect, useState } from "react";
const HomePage = () => {
     const [counter,setCounter]=useState(0);
     const navigate=useNavigate();
     const handleCounter=()=>{
        setCounter((prev)=>prev+1)
            if(counter>=4){
                navigate("/about")
     }
    };
    useEffect(()=>{
        let id=setTimeout(()=>{
            navigate("/about")
        },2000)
        return()=>{
            console.log("clear");
            
            clearTimeout(id);
        }
    },[]);
  return(
    <div>
      <Navbar />
      <main>
        <h3 className={styles.heading_title}>Home Page::{counter}</h3>
        <button onClick={handleCounter}>click me</button>
      </main>
    </div>
  );
};
export { HomePage };
