import React from 'react';
import './Onboarding.css';

const Onboarding = () => {
  return (
    <div className="Onboarding">
      <div className="status-bar">
        <span className="time">9:41</span>
        <span className="signal">📶</span>
        <span className="wifi">📡</span>
        <span className="battery">🔋</span>
      </div>
      <div className="content">
        <div className="title">Help us know you</div>
        <button className="Button">I have a dementia diagnosis</button>
        <button className="Button">I want to check for dementia symptoms</button>
      </div>
      <div className="BarsHomeIndicator">
        <div className="Line" />
      </div>
    </div>
  );
}

export default Onboarding;
