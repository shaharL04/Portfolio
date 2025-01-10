import React, { useRef } from "react";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
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

  return (
    <div className="mainDiv">
      <div className="scrollIndicatorDiv">
        <ScrollIndicator startRef={aboutMeRef} endRef={projectsRef} />
      </div>
      <div className="textDiv">
        <div className="topDiv">
          <div className="introductionDiv">
            <p className="helloIAm">Hello I am</p>
            <p className="myName">Shahar Liba</p>
            <p className="mySpecialization">Full-stack web developer</p>
            <p className="whatDoIDo">
              I craft end-to-end web solutions.
              <br />
              <br />
              Transforming ideas into fully functional applications.
            </p>
          </div>

          <div className="menuDiv">
            {/* Pass refs to the Menu component */}
            <Menu 
              aboutMeRef={aboutMeRef} 
              stackRef={stackRef} 
              projectsRef={projectsRef} 
            />
          </div>
        </div>

        <div className="aboutMeDiv" ref={aboutMeRef}>
          <AboutMe />
        </div>

        <div className="stackDiv" ref={stackRef}>
          <Stack />
        </div>

        <div className="projectsDiv" ref={projectsRef}>
          <Projects />
        </div>

        <div className="footerDiv">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
