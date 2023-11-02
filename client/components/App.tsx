//imports
import { Outlet } from 'react-router-dom'
import Level0Component from './Level-0'

function App() {
  return (
    <>
      <div>
        <p>App Page</p>
      </div>
  
        <Outlet />

    </>
  )
}

export default App
