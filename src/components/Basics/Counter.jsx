import React, { useState } from 'react'

const Counter = () => {
    let [counter, setCounter] = useState(5);

    const addValue = () => {
        counter = counter +1
        counter >= 6 ? alert('Can not increase above zero') : setCounter(counter)        
    }

    const removeValue = () => {
        counter = counter -1;
        counter < 0 ? alert('Can not decrease below zero') : setCounter(counter)
        
    }

  return (
    <div>
        <h2>Counter value: {counter}</h2>
        <button onClick={addValue}>Increase value {counter}</button>
        <br />
        <button onClick={removeValue}>Decrease value {counter}</button>
        <p>{counter}</p>
    </div>
  )
}

export default Counter