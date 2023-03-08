import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <>
    <Navbar />
      <section id="home-section">
        <Home />
      </section>
      <section id="about-section">
        <Home />
      </section>
    </>
  )
}

export default App
