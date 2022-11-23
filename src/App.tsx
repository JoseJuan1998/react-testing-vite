import { useState } from 'react'
import './App.css'
import Application from './components/Application'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Application />
    </div>
  )
}

export default App
