import React from 'react'

const Counter = () => {
    let counter = 5;

    const addValue = () => {
        counter = counter +1;
        console.log(counter);
        
    }

  return (
    <div>
        <h2>Counter value: {counter}</h2>
        <button onClick={addValue}>Increase value {counter}</button>
        <br />
        <button>Decrease value {counter}</button>
        <p>{counter}</p>
    </div>
  )
}

export default Counter