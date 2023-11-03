//imports
import { Outlet } from 'react-router-dom'
import Level0Component from './Level-0'

function App() {
  return (
    <>
    
      <header>
        <h1>Deactivate the Bomb</h1>
      </header>
      <div className="center">
      <Outlet />
      </div>
    </>
    
  )
}

export default App
