import  { useRef } from "react";
import CompaniesCarousel from "./components/CompaniesCarousel/CompaniesCarousel";
import Menu from "./components/Menu/Menu";
import AboutMe from "./components/AboutMe/AboutMe";
import Stack from "./components/Stack/Stack";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

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


  return (
    <div>
      <div className="openingDiv">
        <div className="openingText">
            <span className="gradientText">FullStack </span> <br />
            <span className="normalText">Web <br /> Developer</span>
        </div>
        <div className="animtedImgDiv">
            <img className="animatedImg" src="/animatedDev.svg"></img>
        </div>
      </div>


      <div className="companiesDiv">
        <p className="companiesText">Companies I've worked with:</p>
        <CompaniesCarousel svgPaths={svgPaths}/>
      </div>

      <div className="menuDiv">
          <p className="menuIntroduction">Hello! I'm Shahar Liba</p>
          <Menu aboutMeRef = {aboutMeRef} stackRef = {stackRef} projectsRef={projectsRef}/>
          
      </div>

      <div className="aboutMeDivWrapper" ref={aboutMeRef}>
          <hr></hr>
          <AboutMe />
      </div>

      <div className="stackDiv" ref={stackRef}>
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
