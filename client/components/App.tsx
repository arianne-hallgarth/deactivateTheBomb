//imports
import { Outlet } from 'react-router-dom'
import Level0Component from './Level-0'

function App() {
  return (
    <>
      <div>
        <h1>Deactivate the Bomb</h1>
      </div>

      <Outlet />
    </>
  )
}

export default App
