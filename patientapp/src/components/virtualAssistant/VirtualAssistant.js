import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VirtualAssistant.css';
import { FaArrowLeft, FaMicrophone } from 'react-icons/fa';

const VirtualAssistant = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <div className="header">
        <FaArrowLeft className="back-button" onClick={goBack} />
        <h2>Chat</h2>
      </div>
      <div className="chat-image-container">
        <img src="/path/to/image.png" alt="Chat" className="chat-image" />
      </div>
      <div className="mic-container">
        <div className="mic-button">
          <FaMicrophone className="mic-icon" />
        </div>
      </div>
    </div>
  );
};

export default VirtualAssistant;
