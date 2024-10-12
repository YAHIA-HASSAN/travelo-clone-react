import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import About from './Pages/About'
import './Components/PhotoSection/PhotoSection.css';
import './Components/OurStory/OurStory.css';
import './Components/VidioSection/VidioSection.css';
import './Components/TravelSection/TravelSection.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <About />
  </StrictMode>,
)
