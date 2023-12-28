// LoadingScreen.js

import React from 'react';
import './index.css'; // You can style your loading screen in a separate CSS file
import lodinglogo from './lodinglogo.gif'
const LoadingScreen = () => {
  return (
    <div className="loading-screen flex w-screen h-screen bg-black">
      <img src={lodinglogo} alt='Lodding ...'></img>
      <p className=' font-bold text-2xl text-blue-600'>Lodding ...</p>
    </div>
  );
};

export default LoadingScreen;