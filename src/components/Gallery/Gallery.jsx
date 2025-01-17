import React, { useState } from "react";
import { IconChevronRight,IconChevronLeft  } from '@tabler/icons-react';
import "./imageGallery.css";

const Gallery = ({ mediaPaths }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current media index

  //updates
  // Open the modal to view the clicked image or video
  const openModal = (mediaPath) => {
    setCurrentMedia(mediaPath);
    setModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setModalOpen(false);
    setCurrentMedia(null);
  };

  // Go to the next media item (image or video)
  const nextMedia = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === mediaPaths.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Go to the previous media item (image or video)
  const prevMedia = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaPaths.length - 1 : prevIndex - 1
    );
  };

  // Function to render either image or video
  const renderMedia = (path) => {
    const extension = path.split(".").pop().toLowerCase();
    if (extension === "mp4" || extension === "webm" || extension === "ogg") {
      return (
        <video
          className="carousel-media"
          src={path}
          alt="Video"
          controls
          onClick={() => openModal(path)}
        />
      );
    } else {
      return (
        <img
          className="carousel-media"
          src={path}
          alt="Image"
          onClick={() => openModal(path)}
        />
      );
    }
  };

  return (
    <div>
      {/* Media Carousel */}
      <div className="gallery">
        <div className="carousel-container">
          <button className="carousel-button-prev" onClick={prevMedia}>
          <IconChevronLeft size={24} stroke={2} />
          </button>
          {renderMedia(mediaPaths[currentIndex])}
          <button className="carousel-button-next" onClick={nextMedia}>
          <IconChevronRight size={24} stroke={2} />
          </button>
        </div>
      </div>

      {/* Modal for full-screen media view */}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="modal-close" onClick={closeModal}>
            ×
          </span>
          {currentMedia.endsWith(".mp4") ||
          currentMedia.endsWith(".webm") ||
          currentMedia.endsWith(".ogg") ? (
            <video className="modal-media" src={currentMedia} controls />
          ) : (
            <img src={currentMedia} alt="Current View" className="modal-media" />
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;
