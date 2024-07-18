// Gallery.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './gallery.css';
import { FaArrowLeft } from 'react-icons/fa';

const images = [
  'f1.png',
  'p2.png',
  'p3.png',
  'p4.png',
  'p5.png',
  'p6.png',
  // Add more image paths here
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const openModal = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="gallery-container">
      <div className="header">
        <FaArrowLeft className="back-button" onClick={goBack} />
        <h1>Image Gallery</h1>
      </div>
      <div className="scrollable-gallery">
        {images.map((src, index) => (
          <div className="image-item" key={index} onClick={() => openModal(src)}>
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal">
          <button className="close-button" onClick={closeModal}>✖</button>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
