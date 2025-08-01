import React, { useState, useEffect } from 'react';
import NammaNavbar from './Navbar';

const Gallery = () => {
  const images = Array.from({ length: 127 }, (_, i) => i + 1);
  const [columns, setColumns] = useState(getColumns());
  const [popupIndex, setPopupIndex] = useState(null); // null means no popup

  function getColumns() {
    return window.innerWidth <= 600 ? 2 : 4;
  }

  useEffect(() => {
    function handleResize() {
      setColumns(getColumns());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Open popup with clicked image index
  const openPopup = (index) => {
    setPopupIndex(index);
    document.body.style.overflow = 'hidden'; // prevent background scroll
  };

  // Close popup
  const closePopup = () => {
    setPopupIndex(null);
    document.body.style.overflow = 'auto';
  };

  // Show previous image (wrap around)
  const prevImage = () => {
    setPopupIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Show next image (wrap around)
  const nextImage = () => {
    setPopupIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Handle keyboard navigation in popup
  useEffect(() => {
    function handleKeyDown(e) {
      if (popupIndex !== null) {
        if (e.key === 'ArrowLeft') prevImage();
        else if (e.key === 'ArrowRight') nextImage();
        else if (e.key === 'Escape') closePopup();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [popupIndex]);

  return (
    <div>
      <NammaNavbar />
<h1 className="mt-25 p-5 mb-8 text-4xl font-semibold text-center text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
  Gallery
</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '15px',
          padding: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: '#f9f9f9',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          transition: 'grid-template-columns 0.3s ease',
        }}
      >
        {images.map((num, idx) => (
          <div
            key={num}
            style={{
              overflow: 'hidden',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              cursor: 'pointer',
              backgroundColor: '#fff',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onClick={() => openPopup(idx)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
            }}
          >
            <img
              src={`Images/${num}.jpg`}
              alt={`Image ${num}`}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                display: 'block',
                borderRadius: '12px',
              }}
            />
          </div>
        ))}
      </div>

      {/* Popup modal */}
      {popupIndex !== null && (
        <div
          onClick={closePopup}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            cursor: 'pointer',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()} // prevent closing on image click
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Left arrow */}
            <button
              onClick={prevImage}
              style={arrowStyle('left')}
              aria-label="Previous Image"
            >
              ‹
            </button>

            {/* Image */}
            <img
              src={`Images/${images[popupIndex]}.jpg`}
              alt={`Image ${images[popupIndex]}`}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                width: 'auto',
                height: 'auto',
                borderRadius: '12px',
                display: 'block',
                userSelect: 'none',
              }}
              draggable={false}
            />

            {/* Right arrow */}
            <button
              onClick={nextImage}
              style={arrowStyle('right')}
              aria-label="Next Image"
            >
              ›
            </button>

            {/* Close button */}
            <button
              onClick={closePopup}
              style={closeButtonStyle}
              aria-label="Close Popup"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Arrow button styles helper
const arrowStyle = (side) => ({
  position: 'absolute',
  top: '50%',
  [side]: '10px', // inside the container, near edges
  transform: 'translateY(-50%)',
  fontSize: '3.5rem',
  color: '#fff',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  border: 'none',
  cursor: 'pointer',
  userSelect: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'background-color 0.3s ease',
  padding: 0,
  lineHeight: 1,
  fontWeight: 'bold',
  zIndex: 10,
});

// Close button style
const closeButtonStyle = {
  position: 'absolute',
  top: '-40px',
  right: '0',
  fontSize: '2rem',
  color: '#fff',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  userSelect: 'none',
};

export default Gallery;
