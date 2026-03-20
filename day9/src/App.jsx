import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [laps, setLaps] = useState([]);
  const [isTimerRunning, setisTimerRunning] = useState(true);
  useEffect(() => {
    let id=null
    if (isTimerRunning) {
      id = setTimeout(() => {
        setTimeInSeconds((prevTime) => {
          return prevTime + 1;
        });
      }, 300);
    }
    //cleanup....
    return () => {
      clearTimeout(id);
    };
  }, [isTimerRunning,timeInSeconds]);

  const seconds = timeInSeconds % 60;
  const minutes = Math.floor(timeInSeconds / 60) % 60;
  const hours = Math.floor(timeInSeconds / 3600);
  const uniformSecondValue = seconds.toString().padStart(2, "0");
  const handleLap = () => {
    setLaps((prev) => {
      const temp = [...prev];
      temp.push(`${hours}:${minutes}:${uniformSecondValue}`);
      return temp;
    });
  };
  const toggleTimer=()=>{
    setisTimerRunning((prev)=>{
      return  !prev;
    })
  }
  const handleReset=()=>{
    setTimeInSeconds(0);
    setisTimerRunning(false);
  }
  return (
    <div>
      <h2>
        {hours}:{minutes}:{uniformSecondValue}
      </h2>
      <button onClick={handleLap}>Lap</button>
      <div>

      {
        isTimerRunning?<button onClick={toggleTimer}>Pause</button>
        :  <button onClick={toggleTimer}>Play</button>
      }
      </div>
      <button onClick={handleReset}>Reset</button>
      <ul>
        {laps.map((lap, ind) => {
          return <li key={ind}>{lap}</li>;
        })}
      </ul>
    </div>
  );
};
export default App;
