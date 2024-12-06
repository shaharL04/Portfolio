import AboutMe from "./components/AboutMe/AboutMe";
import Stack from "./components/Stack/Stack";
import Projects from './components/Projects/Projects'
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {

  return (
    <div className="mainDiv">
      <div className="introductionDiv">
        <p className="helloIAm">Hello I am</p>
        <p className="myName">Shahar Liba</p>
        <p className="mySpecialization">Full-stack web developer</p>
        <p className="whatDoIDo">I craft end-to-end web solutions. <br/><br/> Transforming ideas into fully functional applications.</p>
      </div>
      <AboutMe/>
      <Stack/>
      <Projects/>
      <Footer/>

    </div>
  );
}

export default App;