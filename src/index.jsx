import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './Pages/About';
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import UserProfile from './Pages/UserProfile';
import NotFound from './Pages/NotFound';
import Destination from './Pages/Destination';
import Feedback from './Pages/Feedback';
import Contact from './Pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

      <NavBar />
    
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Destination' element={<Destination />} />
        <Route path='/Feedback' element={<Feedback />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/UserProfile' element={<UserProfile />} />
        <Route path='/*' element={<NotFound />} />
    
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);
