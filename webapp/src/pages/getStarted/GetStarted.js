import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <div className="GetStarted">
      <div className="status-bar">
        <span className="time">9:41</span>
        <span className="signal">📶</span>
        <span className="wifi">📡</span>
        <span className="battery">🔋</span>
      </div>
      <div className="Logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="100"
          viewBox="0 96 960 960"
          width="100"
          fill="#00B0B9"
        >
          <path d="M760 856H200q-33 0-56.5-23.5T120 776q0-31 19.5-52.5T186 694q2-66 47.5-113.5T340 533q28-57 78.5-90T520 410q38 0 71 13t60 35q52 12 86 53.5T771 604q54 5 89.5 39t35.5 83q0 47-33 80t-80 33ZM200 816h560q23 0 39.5-16.5T816 760q0-23-16.5-39.5T760 704h-40v-40q0-50-35-85t-85-35q-20 0-37 7.5T530 573l-24 19-23-25q-15-15-33.5-23t-40.5-8q-50 0-85 35t-35 85v40h-40q-17 0-28.5 11.5T160 760q0 17 11.5 28.5T200 800ZM480 976q-66 0-123.5-25T256 880q-43-43-68-100.5T163 656q0-66 25-123.5T256 432q43-43 100.5-68t123.5-25q36 0 70.5 7.5T618 373q-14 8-28.5 16T563 405q-25-8-51-11.5T460 390q-125 0-212.5 87.5T160 680q0 125 87.5 212.5T460 980q39 0 75-9.5t71-27.5q14 10 29 19t31 17q-48 32-102 49t-113 17Zm236-277Z"/>
        </svg>
      </div>
      <div className="ButtonContainer">
        <button className="Button">Get Started</button>
        <div className="BarsHomeIndicator">
          <div className="Line" />
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
