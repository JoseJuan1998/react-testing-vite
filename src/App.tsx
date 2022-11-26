import { useState } from 'react'
import './App.css'
// import Application from './components/Application'
import Counter from './components/Counter'
import MuiMode from './components/MuiMode'
import Users from './components/Users'
import { AppProviders } from './providers/app-providers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        {/* <Counter /> */}
        {/* <MuiMode /> */}
        <Users />
      </div>
    </AppProviders>
  )
}

export default App
