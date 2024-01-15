import React, { useState } from 'react'

import './App.css'

const App = () => {
    const [count, setCount] = useState(0)

    const countminus = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    }
    const countplush = () => {
      setCount (count+1)
    }

  return (
    <div className='App'>
      <h1>{count}</h1>
      <button  onClick={countminus}>Minus</button>
      <button  onClick={countplush}>plush</button>
    
      
    </div>


  )
}

export default App
