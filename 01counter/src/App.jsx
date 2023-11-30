import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  // let counter = 15

  const increaseValue = () => {
    const count = counter += 1;
    setCounter(count)
    console.log('clicked', count)
  }

  const decreaseValue = () => {
    const count = counter -= 1;
    setCounter(count)
    console.log('clicked', count)
  }

  return (
    <>
      <h1>counter app.</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={increaseValue}>increase value</button>
      <button onClick={decreaseValue}>decrease value</button>
      <p>{counter}</p>
    </>
  )
}

export default App
