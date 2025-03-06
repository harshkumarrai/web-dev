import React from 'react'
import { useState } from 'react'

const App = () => {
  //write js here
  const [count,setCount]=useState(0);
  function onClickHandler(){
 setCount(count+1);
    }
  
  return (
    <div>
        <button id="ss" onClick={onClickHandler}>counter {count}</button>
 </div>
  )
}

export default App
