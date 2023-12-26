import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [counter, setCounter] = useState(0)
  
  const addValue = ()=>{
    if(counter >= 20){
      return
    }
    setCounter(counter +1)
  }
  const removeValue = ()=>{
    if(counter <= 0){
      return
    }
    setCounter(counter -1)
  }

  return (
    <>
      <h1>Chai our React</h1>
      <h2>Counter Value: {counter}</h2>
<br />
      <button onClick={addValue}>Add Value: {counter}</button>
<br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
