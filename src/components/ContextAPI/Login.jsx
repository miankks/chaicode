import React, {useState, useContext} from 'react'
import UserContext from './UserContext'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {setUser} = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password})
  }
  return (
    <>
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Login</div>
      <h2>Login</h2>
      <input 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text" 
        placeholder='Username' 
      />
      {" "}
      <input 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password" 
        placeholder='password' 
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login