import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import About from './Pages/About'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <About />
  </StrictMode>,
)
