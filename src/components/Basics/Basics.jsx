import React from 'react'
import { Link } from 'react-router-dom'

const Basics = () => {
  return (
    <>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Welcome to Basics</div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 text-center">
            <div>
                <ul className="text-gray-500 font-medium">
                     <li className="mb-4">
                        <Link to="/basics/backgroundchanger" className="hover:underline">
                            Background Changer
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/card" className="hover:underline">
                            Card
                        </Link>
                    </li>
                    <li>
                        <Link to="/basics/counter" className="hover:underline">
                            Counter
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="text-gray-500 font-medium">
                    <li className="mb-4">
                        <Link to="/basics/hooks" className="hover:underline">
                            Hooks
                        </Link>
                    </li>
                    <li>
                        <Link to="/reactelement" className="hover:underline">
                            React Element
                        </Link>
                    </li>
                    <li>
                        <Link to="/tailwindprops" className="hover:underline">
                            Tailwind & Props
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Basics