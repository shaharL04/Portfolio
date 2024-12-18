import React, { useState } from "react";
import "./imageGallery.css";

const ImageGallery = ({ imagePaths }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); 

  // Open the modal to view the clicked image
  const openModal = (imagePath) => {
    setCurrentImage(imagePath);
    setModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
  };

  // Go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      {/* Image Carousel */}
      <div className="gallery">
        <div className="carousel-container">
          <button className="carousel-button prev" onClick={prevImage}>
            &lt;
          </button>
          <img
            src={imagePaths[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="carousel-image"
            onClick={() => openModal(imagePaths[currentIndex])}
          />
          <button className="carousel-button next" onClick={nextImage}>
            &gt;
          </button>
        </div>
      </div>

      {/* Modal for full-screen image view */}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="modal-close" onClick={closeModal}>
            ×
          </span>
          <img src={currentImage} alt="Current View" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
