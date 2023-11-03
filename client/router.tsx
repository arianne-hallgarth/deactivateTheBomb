//imports
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Level0Component from './components/Level-0'
import Level1Component from './components/Level-1'
import Level2Component from './components/Level-2'

//routes
export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index path="level0" element={<Level0Component />} />
    <Route path="level1" element={<Level1Component />} /> 
    <Route path="level2" element={<Level2Component />} />
  </Route>
)

export const router = createBrowserRouter(routes)
