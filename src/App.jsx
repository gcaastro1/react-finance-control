import { useState } from 'react'
import { IndexPage } from './components/IndexPage/index.jsx'
import { DashboardPage } from './components/DashboardPage/index.jsx'
import './App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (e) => {
    return !isLoggedIn ? setIsLoggedIn(true) : setIsLoggedIn(false)
  }

  return (
    <div className='App'>
      {isLoggedIn ? (
        <DashboardPage event={handleLogin}/>
      ) : (
        <IndexPage event={handleLogin}/>
      )}
    </div>
  )
}

export default App
