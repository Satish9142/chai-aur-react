import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
     let [counter, setCounter] = useState(15)
  //let counter = 15
  const addValue = () => {
    
    console.log("clicked", counter)
    //çounter = counter + 1
    setCounter( counter + 1 )

  } 
  const removeValue = () => {
    setCounter(counter - 1);

  }


  return (
    <>
     <h1>Chai aur react</h1> 
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add Value</button>
     <br></br>
     <button
     onClick={removeValue}>remove Value {counter}</button>
     <p>footer: {counter}</p>

    </>
  )
}

export default App
