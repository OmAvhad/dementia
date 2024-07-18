import React from 'react';
import './SplashScreen.css';

function SplashScreen() {
  return (
    <div className="container">
      <img src="brain-image.png" alt="Brain Icon" className="logo" />
      <div className="button-container">
        <button className="get-started-button" onClick={() => alert('Get Started')}>
          Get Started
        </button>
      </div>
      
      <div className="bottom-bar"></div>
      
    </div>


    
  );
}

export default SplashScreen;
