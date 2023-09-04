import React from 'react'
import { useState } from 'react'
const App = () => {
  const [counter,setcounter] = useState(0);
  return (
    <div classname="App">
      <button onClick={()=> setcounter(prevCount=> prevCount -1)}> - </button><br></br>
      <button>{counter}</button><br></br>
      <button onClick={()=> setcounter(prevCount=> prevCount +1)}> + </button><br></br>
    </div>
  )
}

export default App
