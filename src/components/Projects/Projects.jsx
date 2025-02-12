import React, { useState } from 'react';
import TechInProject from '../TechInProject/TechInProject';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.css';

const Projects = () => {
  const [flippedStates, setFlippedStates] = useState({});

  const toggleFlip = (index) => {
    setFlippedStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const ProjectsArr = [
    {
      projectTitle: "Vulnerability Scanner",
      titleImg: "/websiteScanner.png",
      imgColors: ["#39ff14", "#003d4d"],
      projectDescription: "Developed a web application to scan websites for vulnerabilities using a custom Nikto Docker container. Integrated OpenAI API to analyze and categorize detected vulnerabilities by threat level, presenting results in an intuitive format to enhance security assessment and prioritization.",
      projectTech: ["html", "css", "javascript", "react", "node", "docker"],
      projectLink: "https://github.com/shaharL04/WebsiteExploits/tree/backend",
    },
    {
      projectTitle: "Unitalking",
      titleImg: "/unitalking.jpeg",
      imgColors: ["#00bfff", "#001f3f"],
      projectDescription: "Unitalking is global chat platform enabling users to create friend groups and communicate in real time via WebSocket technology, supporting multiple connections per user. Integrated LibreTranslate to allow seamless multilingual conversations, fostering inclusivity and breaking language barriers.",
      projectTech: ["html", "css", "javascript", "react", "node", "ts", "pg", "socketio"],
      projectLink: "https://github.com/shaharL04/unitalking/tree/backend",
    },
    {
      projectTitle: "JARVIS",
      titleImg: "/JARVIS.png",
      imgColors: ["#d6c7b5", "#004f4f"],
      projectDescription: "JARVIS is a real-time AI assistant using the OpenAI API, with voice and text interactions. Implemented bi-directional WebSocket connections for low-latency processing. Integrated tools for practical functionalities like weather updates, news retrieval, and email automation, showcasing expertise in real-time architecture and AI integration.",
      projectTech: ["html", "css", "javascript", "react", "ts", "socketio"],
      projectLink: "https://github.com/shaharL04/JARVIS/tree/backend",
    },
    {
      projectTitle: "Speech To Text (STT)",
      titleImg: "/stt.png",
      imgColors: ["#00cfff", "#8A2BE2"],
      projectDescription: "Designed an automated solution for processing audio using Azure Cognitive Services and REST APIs. Developed a pipeline where uploaded audio files trigger a Function App, split into chunks, and transcribed using a custom Azure Speech-to-Text model. Integrated transcription results with OpenAI APIs for summarization, sentiment analysis, and intent extraction, seamlessly delivering actionable insights to a CRM system.",
      projectTech: ["python", "azure", "docker"],
      projectLink: "https://github.com/username/weather-dashboard",
    },
    {
      projectTitle: "Containerization & Deployment on AWS",
      titleImg: "/awsK8sDocker.png",
      imgColors: ["#4169E1", "#2ECC71"],
      projectDescription:
        "Containerized and deployed a product to AWS using Docker and GitHub Container Registry (GHCR). Orchestrated deployment with Kubernetes, implementing Ingress, Services, Deployments, and CronJobs for scalable and efficient cloud-native operations.",
      projectTech: ["csharp", "docker", "aws", "kubernetes"],
      projectLink: "https://github.com/username/weather-dashboard",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '25px',
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="ProjectsDiv">
      <div className='projectHeader'>
        <p className="project">Projects</p>
        <img className='projectImg' src='./projects.svg'></img>
      </div>
      <div className="sliderContainer">
      <Slider {...settings} className="project-slider">
        {ProjectsArr.map((projectObj, index) => (
          <div key={index} className={`projectCard ${flippedStates[index] ? "flipped" : ""}`} onClick={() => toggleFlip(index)}>
            <div className="cardInner">
              <div className="cardFront" style={{ background: `linear-gradient(${projectObj.imgColors[0]}, ${projectObj.imgColors[1]})` }}>
                <div className='flipCardDiv'>
                  <img className='flipImage' src="/flipCard.svg" alt="flip" />
                </div>
                <img className='cardImage' src={projectObj.titleImg} alt="Project logo" />
              </div>
              <div className="cardBack">
                <p className="projectTitle">{projectObj.projectTitle}</p>
                <div className='projectBody'>
                  <p className="projectDescription">{projectObj.projectDescription}</p>
                  <p className="projectTech"><TechInProject svgArr={projectObj.projectTech}/> </p>
                  <p className='githubProj'>
                    <img className='githubImage' src='/github.svg' alt="GitHub logo" />
                    <a href={projectObj.projectLink} className="projectGithubLink">View Code</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Projects;
