
import './App.css';
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  let count = 0;

  const onIncrement = () => {
    // count = count + 1;
    setCounter(counter + 1);
  };
  const onDecrement = () => {
    // count = count - 1;
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <div>
        <button onClick={onDecrement}>Decrement</button>
        <span style={{
          marginLeft: "20px",
          marginRight: "20px"
        }}> 
        Count is {counter} </span>
        <button onClick={onIncrement} >Increment</button>
      </div>
    </div>
  );
}

export default Counter;
