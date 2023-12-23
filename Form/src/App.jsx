import { useState } from 'react'
import './App.css'

function App() {
  const [resister, setResister] = useState([])

const handleSubmit =(e) => {
  e.preventDefault();

  console.log(e.target[0].value)
  console.log(e.target[1].value)
  console.log(e.target[2].value)
  console.log(e.target[3].value)
}

  return (
    <>
      <form action="" onSubmit={handleSubmit} >
        <label htmlFor="name">Name</label>
          <input type="text" id='name'/>

        <label htmlFor="email">Email</label>
          <input type="email" id='email'/>

        <label htmlFor="mob">Mob. No.</label>
          <input type="text" id='mob'/>

        <label htmlFor="name">Password</label>
          <input type="password" id='name'/>

          <button type='submit'>Submit </button>

      </form>
    </>
  )
}

export default App
