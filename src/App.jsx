import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './componants/AddTodo'
import Todos from './componants/Todos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learn About Redux Tool Kit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App





