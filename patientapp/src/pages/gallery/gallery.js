// Dashboard.js
import React from 'react';
import './gallery.css';

const Gallery = () => {
  const handleLinkClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="gallery-container">
      
      <div className="grid">
        <div className="grid-item" onClick={() => handleLinkClick('/gallery')}>
          <img src="gallery.png" alt="Gallery" />
          <p>Gallery</p>
        </div>
        <div className="grid-item" onClick={() => handleLinkClick('/match')}>
          <img src="play.png" alt="Games" />
          <p>Games</p>
        </div>
        <div className="grid-item" onClick={() => handleLinkClick('/repeat-words')}>
          <img src="repeat.png" alt="Repeat  Words" />
          <p>Repeat  Words</p>
        </div>
        <div className="grid-item" onClick={() => handleLinkClick('/contacts')}>
          <img src="contacts.png" alt="Contacts" />
          <p>Contacts</p>
        </div>
      
      </div>
    </div>
  );
};

export default Gallery;
