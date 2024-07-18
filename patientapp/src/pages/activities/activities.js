
import React from 'react';
import './activities.css';
import DashboardHeader from '../../components/dashboardHeader/dashboardHeader';
import BottomNav from '../../components/bottomNav/bottomNav';

const Activities = () => {
  const handleLinkClick = (url) => {
    window.location.href = url;
  };

  return (


    <div className="bg-[#F7F7F7]">
        <DashboardHeader/>     
            
        
        <div className="gallery-container">
        
        <div className="grid">
            <div className="grid-item" onClick={() => handleLinkClick('/gallery')}>
            <img src="gallery.png" alt="Gallery" />
            <p><b>Gallery</b></p>
            </div>
            <div className="grid-item" onClick={() => handleLinkClick('/match')}>
            <img src="play.png" alt="Games" />
            <p><b>Games</b></p>
            </div>
            <div className="grid-item" onClick={() => handleLinkClick('/repeat-words')}>
            <img src="repeat.png" alt="Repeat  Words" />
            <p><b>Repeat  Words</b></p>
            </div>
            <div className="grid-item" onClick={() => handleLinkClick('/contacts')}>
            <img src="contact.png" alt="Contacts" />
            <p><b>Contacts</b></p>
            </div>
        
        </div>
        </div>
    <BottomNav/>
    </div>
  );
};

export default Activities;
