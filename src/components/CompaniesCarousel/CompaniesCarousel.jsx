import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./CompaniesCarousel.css";

const CompaniesCarousel = ({ svgPaths }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (carousel) {
          if (carousel.scrollLeft <= 0) {
            carousel.scrollLeft = carousel.scrollWidth; // Reset to the end
          } else {
            carousel.scrollLeft -= 0.2; // Slow scroll from left to right
          }
        }
      }, 15); // Lower interval value = slower scroll
    };

    startScroll();

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  return (
    <div className="companies-carousel-container" ref={carouselRef}>
      <div className="companies-carousel-content">
        {svgPaths.map((path, index) => (
          <div key={index} className="companies-carousel-item">
            <img src={path} alt={`Company Logo ${index + 1}`} />
          </div>
        ))}
        {/* Duplicate SVGs for seamless looping */}
        {svgPaths.map((path, index) => (
          <div key={`duplicate-${index}`} className="companies-carousel-item">
            <img src={path} alt={`Duplicate Logo ${index + 1}`} />
          </div>
        ))}
        {svgPaths.map((path, index) => (
          <div key={`duplicate-${index}`} className="companies-carousel-item">
            <img src={path} alt={`Duplicate Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesCarousel;
