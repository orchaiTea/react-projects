import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const increaseValue = (maxValue) => {
    if (counter < maxValue) {
      const count = (counter += 1);
      setCounter(count);
    }
  };

  const decreaseValue = (minValue) => {
    if (counter > minValue) {
      const count = (counter -= 1);
      setCounter(count);
    }
  };

  const resetValue = () => {
    setCounter((counter = 0));
  };

  return (
    <>
      <h1>counter app.</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={() => increaseValue(20)}>increase value</button>
      <button onClick={resetValue}>Rest value</button>
      <button onClick={() => decreaseValue(0)}>decrease value</button>
      <p>{counter}</p>
    </>
  );
}

export default App;
