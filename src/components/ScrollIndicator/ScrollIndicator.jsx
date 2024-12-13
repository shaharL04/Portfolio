import React, { useState, useEffect } from "react";
import "./ScrollIndicator.css";

const ScrollIndicator = ({ startRef, endRef }) => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [indicatorTop, setIndicatorTop] = useState(0); // Dynamic position
  const [indicatorHeight, setIndicatorHeight] = useState(0); // Height of the indicator container

  useEffect(() => {
    const updateIndicatorBounds = () => {
      if (!startRef.current || !endRef.current) return;

      // Get bounds of the About Me (start) and Projects (end) sections
      const startTop = startRef.current.getBoundingClientRect().top + window.scrollY;
      const endBottom = endRef.current.getBoundingClientRect().top + window.scrollY + endRef.current.offsetHeight;

      // Calculate the visible height of the indicator
      const viewportHeight = window.innerHeight;
      const topOffset = Math.max(0, startTop - window.scrollY);
      const bottomOffset = Math.min(viewportHeight, endBottom - window.scrollY);

      setIndicatorTop(topOffset); // Dynamic starting point
      setIndicatorHeight(bottomOffset - topOffset); // Dynamic container height
    };

    const handleScroll = () => {
      if (!startRef.current || !endRef.current) return;

      const startTop = startRef.current.offsetTop;
      const endBottom = endRef.current.offsetTop + endRef.current.offsetHeight;
      const scrolled = window.scrollY + window.innerHeight / 2;

      // Update progress based on scroll
      if (scrolled < startTop) {
        setScrollHeight(0); // Before About Me
      } else if (scrolled > endBottom) {
        setScrollHeight(100); // Beyond Projects
      } else {
        const totalHeight = endBottom - startTop;
        const progress = ((scrolled - startTop) / totalHeight) * 100;
        setScrollHeight(progress);
      }

      // Update indicator bounds
      updateIndicatorBounds();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateIndicatorBounds);

    // Initialize bounds
    updateIndicatorBounds();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateIndicatorBounds);
    };
  }, [startRef, endRef]);

  return (
    <div
      className="indicator-container"
      style={{
        top: `${indicatorTop}px`,
        height: `${indicatorHeight}px`,
      }}
    >
      <div
        className="indicator"
        style={{
          height: `${scrollHeight}%`,
        }}
      />
    </div>
  );
};

export default ScrollIndicator;
