
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>
      <div className='fixed flex justify-center flex-wrap bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center bg-white shadow-lg gap-3 rounded-xl px-3 py-3'>
        <button className='outline-none px-4 py-1 rounded-full text-white '
        style={{backgroundColor: "red"}}
        onClick={() => setColor("red")}>Red</button >
         <button className='outline-none px-4 py-1 rounded-full text-white'
        style={{backgroundColor: "blue"}}
        onClick={() => setColor("blue")}>Blue</button>
         <button className='outline-none px-4 py-1 rounded-full text-white'
        style={{backgroundColor: "orange"}}
        onClick={() => setColor("orange")}>Orange</button>
         <button className='outline-none px-4 py-1 rounded-full text-black'
        style={{backgroundColor: "yellow"}}
        onClick={() => setColor("yellow")}>Yellow</button>
         <button className='outline-none px-4 py-1 rounded-full text-white'
        style={{backgroundColor: "black"}}
        onClick={() => setColor("black")}>Black</button>
         <button className='outline-none px-4 py-1 rounded-full text-black'
        style={{backgroundColor: "white"}}
        onClick={() => setColor("white")}>White</button>
         <button className='outline-none px-4 py-1 rounded-full text-white'
        style={{backgroundColor: "purple"}}
        onClick={() => setColor("purple")}>Purple</button>
         <button className='outline-none px-4 py-1 rounded-full'
        style={{backgroundColor: "green"}}
        onClick={() => setColor("green")}>Green</button>
        </div>
        
      </div>

    </div>
  )
}

export default App
