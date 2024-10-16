import { useState } from 'react'
import './App.css'
import Login from './componets/login'
import register from './componets/register'
function App() {
  const [count, setCount] = useState(0)

  return (
   <Login/>
  )
}

export default App
