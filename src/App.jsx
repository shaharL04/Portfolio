import  { useRef } from "react";
import CompaniesCarousel from "./components/CompaniesCarousel/CompaniesCarousel";
import Menu from "./components/Menu/Menu";
import AboutMe from "./components/AboutMe/AboutMe";
import Stack from "./components/Stack/Stack";
import "./App.css";

function App() {
  const aboutMeRef = useRef(null);
  const stackRef = useRef(null);
  const projectsRef = useRef(null);

  const svgPaths = [ 
    "src/assets/microsoft.svg",
    "src/assets/kpmg.svg",
    "src/assets/matrix.svg",
    "src/assets/bynet.svg",
    "src/assets/wiz.svg",
    "src/assets/yoman.svg",
  ]


  return (
    <div>
      <div className="openingDiv">
        <div className="openingText">
            <span className="gradientText">FullStack </span> <br />
            <span className="normalText">Web <br /> Developer</span>
        </div>
      </div>

      <div className="socialBtnsDiv">
          <button className="GithubBtn socialBtns"><img className="githubImg" src="src/assets/github.svg"></img> Github</button>
          <button className="LinkedinBtn socialBtns"><img className="linkedinImg" src="src/assets/linkedin.svg"></img>Linkedin</button>
      </div>

      <div className="companiesDiv">
        <p className="companiesText">Companies I've worked with:</p>
        <CompaniesCarousel svgPaths={svgPaths}/>
      </div>

      <div className="menuDiv">
          <p className="menuIntroduction">Hello! I'm Shahar Liba</p>
          <Menu aboutMeRef = {aboutMeRef} stackRef = {stackRef}/>
      </div>

      <div className="aboutMeDiv" ref={aboutMeRef}>
          <AboutMe />
      </div>

      <div className="stackDiv" ref={stackRef}>
          <Stack />
      </div>

    </div>
  );
}

export default App;
