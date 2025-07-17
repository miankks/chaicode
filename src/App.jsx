import React from 'react'
import Chai from './chai.jsx'
import ReactElement from './components/ReactElement.jsx'
import Counter from './components/Counter.jsx';
import TailwindProps from './components/TailwindProps.jsx';

function App() {
  // avaluated exression {username}
  const username = 'chai aur code';
  let workenperience = '5 years'
  return (
    <div>
      <ReactElement />
      <h5>{username}</h5>
      <h6>{workenperience}</h6>
      <Counter />
      <TailwindProps />
    </div>
  )
}

export default App
