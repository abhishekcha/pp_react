import { useState } from "react";
const App = () => {
  const [fn, setFn] = useState(null);
  const [sn, setSn] = useState(null);
  const [operator, setOperator] = useState(null);
  const handleNumberClick = (e) => {
    const val = e.target.innerText;
    if (operator === null) {
      setFn((prev) => {
        if (prev === null) {
          return val;
        } else {
          return Number(prev * 10) + Number(val);
        }
      });
    } else {
      setSn((prev) => {
        if (prev === null) {
          return val;
        } else {
          return Number(prev * 10) + Number(val);
        }
      });
    }
  };
  return (
    <>
      <div>
        <button className="1" onClick={handleNumberClick}>
          1
        </button>
        <button className="2" onClick={handleNumberClick}>
          2
        </button>
        <button className="3" onClick={handleNumberClick}>
          3
        </button>
        <button className="4" onClick={handleNumberClick}>
          4
        </button>
        <button className="5" onClick={handleNumberClick}>
          5
        </button>
        <button className="6" onClick={handleNumberClick}>
          6
        </button>
        <button className="7" onClick={handleNumberClick}>
          7
        </button>
        <button className="8" onClick={handleNumberClick}>
          8
        </button>
        <button className="9" onClick={handleNumberClick}>
          9
        </button>
        <button onClick={handleNumberClick}>0</button>
      </div>
      <div>
        <button onClick={()=>{
          setOperator("+");
        }} >+</button>
      </div>
      <div>{fn !== null ? <p>{fn}</p> : null}</div>
      <div>{sn !== null ? <p>{sn}</p> : null}</div>
      <div>{sn!==null && fn!==null ? (<p>={Number(fn)+Number(sn)}</p>):null }</div>
    </>
  );
};
export default App;
