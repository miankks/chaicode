import React, { useCallback, useEffect, useRef, useState } from 'react'

const Hooks = () => {
    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    // useRef hook
    const passwordRef = useRef(null)

    // useCallback is used for cache  a function definition between re-renders
    const passwordGenerator = useCallback(() => {
      let pass ="";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (numAllowed) str += "0123456789";
      if (charAllowed) str += "!#%&_-.,$()[]{}*";

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }

      setPassword(pass)
    }, [length, numAllowed, charAllowed, setPassword])
    
    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0,20)
      // no window object in server side rendering eg Nextjs
      window.navigator.clipboard.writeText(password)

    }, [password])

    useEffect(() => {
      passwordGenerator()
    }, [length, numAllowed, charAllowed, passwordGenerator])


  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500
            bg-gray-800'>
              <h1 className='text-white text-center my-3'>Password Generator</h1>
            <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                <input 
                  type="text"
                  value={password}
                  className='outline-none w-full py-1 px-3 bg-white'
                  placeholder='password'
                  readOnly
                  ref={passwordRef}
                />
                <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0
                  hover:bg-green-200 hover:text-gray-800'
                  onClick={copyPasswordToClipboard}>copy
                </button>
            </div>
            <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                <input 
                  type="range"
                  min={8}
                  max={20}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e)=> {setLength(e.target.value)}}
                />
                <label>Length:{length}</label>
              </div>
              <div className='flex items-center gap-x-1'>
                <input 
                  type="checkbox"
                  defaultChecked={numAllowed}
                  id='numberInput'
                  onChange={() => {
                    setNumAllowed((prev) => !prev)
                  }} 
                />
                <label htmlFor='numberInput'>Numbers</label>
              </div>
              <div className='flex items-center gap-x-1'>
                <input 
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id='characterInput'
                  onChange={() => {
                    setCharAllowed((prev) => !prev)
                  }} 
                />
                <label htmlFor='characterInput'>Characters</label>
              </div>
            </div>
        </div>
    </>
  )
}

export default Hooks