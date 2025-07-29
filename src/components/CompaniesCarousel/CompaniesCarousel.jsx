import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Marquee from "react-fast-marquee";
import "./CompaniesCarousel.css";

const CompaniesCarousel = ({ svgPaths }) => {


  return (
    <div className="companies-carousel-container">
      <Marquee gradient={false}>
  {[
    ...svgPaths,
    ...svgPaths,  // duplicate
    ...svgPaths   // ensure enough length
  ].map((path, index) => (
    <img key={index} src={path} className="company-logo" />
  ))}
</Marquee>
    </div>
  );
};

export default CompaniesCarousel;
