import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import './App.css'

const App = () => {
    const [count, setCount] = useState(0)

    const countminus = () => {
      setCount (count-1)
    }
    const countplush = () => {
      setCount (count+1)
    }

  return (
    <div className='App'>
    
      <FaMinusCircle onClick={countminus} />
      <span>  {count} </span>
      <FaPlusCircle onClick={countplush} />

    </div>


  )
}

export default App
