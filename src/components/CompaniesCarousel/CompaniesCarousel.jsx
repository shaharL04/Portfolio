import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Marquee from "react-fast-marquee";
import "./CompaniesCarousel.css";

const CompaniesCarousel = ({ svgPaths }) => {


  return (
    <div className="companies-carousel-container">
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
