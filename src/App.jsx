import React from 'react'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  // avaluated exression {username}
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
