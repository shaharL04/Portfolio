import { useRef, useState, useEffect } from "react";
import CompaniesCarousel from "./components/CompaniesCarousel/CompaniesCarousel";
import Menu from "./components/Menu/Menu";
import AboutMe from "./components/AboutMe/AboutMe";
import Stack from "./components/Stack/Stack";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { motion } from "framer-motion";

import "./App.css";

function App() {
  const aboutMeRef = useRef(null);
  const stackRef = useRef(null);
  const projectsRef = useRef(null);

  const svgPaths = [ 
    "/microsoft.svg",
    "/kpmg.svg",
    "/matrix.svg",
    "/bynet.svg",
    "/wiz.svg",
    "/yoman.svg",
  ]

  const jobTitles = ["FullStack", "DevOps", "Frontend", "Backend"];
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);



  useEffect(() => {
    const typingSpeed = deleting ? 50 : 100;
    const changeDelay = 2000;

    if (charIndex === jobTitles[currentIndex].length && !deleting) {
      setTimeout(() => setDeleting(true), changeDelay);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % jobTitles.length);
    }

    const timer = setTimeout(() => {
      setCurrentText(
        deleting
          ? jobTitles[currentIndex].substring(0, charIndex - 1)
          : jobTitles[currentIndex].substring(0, charIndex + 1)
      );
      setCharIndex((prev) => (deleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, currentIndex]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div>
      
      <div className="openingDiv">
        <motion.div
          className="openingText"

        >
          <span className="gradientText">
            {currentText}
            <span className="cursorSpan"
              style={{
                visibility: cursorVisible ? "visible" : "hidden",
              }}
            >
              <img className="cursorSvg" src="/cursor.svg"></img>
            </span>
          </span>
          <br />
        </motion.div>

        <motion.div
          className="animtedImgDiv"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >

        </motion.div>
        <span className="normalText">
          Developer
        </span>
      </div>


      
      <div className="interactiveDiv">
            <div className="contactMeBtnDiv">
              
            </div>
            <div>

            </div>
      </div>


      <div className="companiesDiv">
        <p className="companiesText">Companies I've worked with:</p>
        <CompaniesCarousel svgPaths={svgPaths}/>
      </div>

      <div className="menuDiv">
         
         {/*<Menu aboutMeRef = {aboutMeRef} stackRef = {stackRef} projectsRef={projectsRef}/> */ }
      </div>

      <div className="aboutMeDivWrapper" ref={aboutMeRef}>

          <AboutMe />
      </div>

      <div className="stackDivWrapper" ref={stackRef}>
          <hr></hr>
          <Stack />
      </div>

      <div className="ProjectsDivWrapper" ref={projectsRef}>
          <hr></hr>
          <Projects />
      </div>

      <div className="FooterDivWrapper" >
          <Footer />
      </div>

    </div>
  );
}

export default App;
