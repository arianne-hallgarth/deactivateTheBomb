import { createRoot } from 'react-dom/client'
import {router} from './router'
import { RouterProvider } from 'react-router-dom'
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <RouterProvider router={router} />
  )
})
