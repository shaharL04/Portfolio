import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Marquee from "react-fast-marquee";
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
      <Marquee gradient={false}>
        {svgPaths.map((path, index) => (
          <img
            key={index}
            src={path}
            alt="company logo"
            className="company-logo"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default CompaniesCarousel;
