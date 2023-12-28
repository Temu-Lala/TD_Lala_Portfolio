import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Who from './components/Who';
import Contact from './components/Contact';
import Works from './components/Works';
import Test from './components/Test';
import Hero_3D from './components/Hero_3D';
import Footer from './components/Footer';
import LoadingScreen from './LoadingScreen'; // Import the LoadingScreen component
import './App.css';
import * as THREE from 'three';
import Background from './img/background.png';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Set the duration for 3 seconds

    return () => clearTimeout(timer); // Clear the timeout on component unmount
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <Router>
      {loading ? (
        // Render the LoadingScreen component while loading is true
        <LoadingScreen />
      ) : (
        // Render the main content once loading is false
        <div className="relativ text-white">
          <div className="scroll-content">
            <Hero onClick={() => {}} />
            <Who onClick={() => {}} />
            <Works onClick={() => {}} />
            <Contact onClick={() => {}} />
          </div>

          <div className="fixed inset-0 -z-10 bg-image bg-no-repeat bg-center bg-cover ">
            <Hero_3D class="bg-transparent" />
          </div>

          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;