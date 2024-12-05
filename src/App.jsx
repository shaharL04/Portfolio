import React, { useState, useEffect } from "react";
import Timeline from "./components/Timeline/Timeline";
import Section from "./components/Section/Section";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop - sectionHeight / 3 &&
          window.scrollY < sectionTop + sectionHeight - sectionHeight / 3
        ) {
          setActiveSection(index + 1);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mainDiv">
      <Timeline activeSection={activeSection} />
      <Section id={1}>About Me</Section>
      <Section id={2}>Stack</Section>
      <Section id={3}>Projects</Section>
    </div>
  );
}

export default App;