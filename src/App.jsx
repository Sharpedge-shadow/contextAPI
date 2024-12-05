import { useState } from 'react'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <UserContextProvider>
      <h1>React and Shadow</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
     

  )
}

export default App
