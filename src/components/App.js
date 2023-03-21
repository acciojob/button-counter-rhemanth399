
import React from "react";
import './../styles/App.css';
import {useState} from 'react'

const App = () => {
  let [count,setCount]=useState(0)
  let counter=()=>{
    setCount(count)
  }
  return (
    <div>
      <p>Button clicked{count} times</p>
        <button onClick={counter}>Button</button>
    </div>
  )
}

export default App
