import React from 'react'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'
import UserContextProvider from './components/ContextAPI/UserContextProvider'

function App() {
  // avaluated exression {username}
  return (
    <UserContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </UserContextProvider>
  )
}

export default App
