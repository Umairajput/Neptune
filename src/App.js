import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Home from './Screens/Home/home';
import About from './Screens/About/about';
import Service from './Screens/Services/service';
import { Route, Routes } from 'react-router-dom';
import Contact from './Screens/Contact/contact';
function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
