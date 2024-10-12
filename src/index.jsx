import React from 'react';
import ReactDOM from 'react-dom/client';
import './Components/PhotoSection/PhotoSection.css';
import './Components/OurStory/OurStory.css';
import './Components/VidioSection/VidioSection.css';
import './Components/TravelSection/TravelSection.css';
import About from './Pages/About';
import NavBar from "./Components/NavBar/NavBar"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <About />
  </React.StrictMode>
);
