import React, { useRef, useState } from 'react';
import TechInProject from '../TechInProject/TechInProject';
import './Projects.css';

const Projects = () => {
  const ProjectsArr = [
    {
      projectTitle: "Vulnerability Scanner",
      projectDescription:
        "Developed a web application to scan websites for vulnerabilities using a custom Nikto Docker container. Integrated OpenAI API to analyze and categorize detected vulnerabilities by threat level, presenting results in an intuitive format to enhance security assessment and prioritization.",
      projectTech: ["html", "css", "javascript", "react", "node", "docker"],
      projectLink: "https://github.com/username/portfolio-website",
    },
    {
      projectTitle: "Unitalking",
      projectDescription:
        "Unitalking is global chat platform enabling users to create friend groups and communicate in real time via WebSocket technology, supporting multiple connections per user. Integrated LibreTranslate to allow seamless multilingual conversations, fostering inclusivity and breaking language barriers.",
      projectTech: ["html", "css", "javascript", "react", "node", "ts", "pg", "socketio"],
      projectLink: "https://github.com/username/e-commerce-app",
    },
    {
      projectTitle: "JARVIS",
      projectDescription:
        "JARVIS is a real-time AI assistant using the OpenAI API, with voice and text interactions. Implemented bi-directional WebSocket connections for low-latency processing. Integrated tools for practical functionalities like weather updates, news retrieval, and email automation, showcasing expertise in real-time architecture and AI integration.",
      projectTech: ["html", "css", "javascript", "react", "ts", "socketio"],
      projectLink: "https://github.com/username/chat-application",
    },
    {
      projectTitle: "Speech To Text (STT)",
      projectDescription:
        "Designed an automated solution for processing audio using Azure Cognitive Services and REST APIs. Developed a pipeline where uploaded audio files trigger a Function App, split into chunks, and transcribed using a custom Azure Speech-to-Text model. Integrated transcription results with OpenAI APIs for summarization, sentiment analysis, and intent extraction, seamlessly delivering actionable insights to a CRM system.",
      projectTech: ["python", "azure", "docker"],
      projectLink: "https://github.com/username/weather-dashboard",
    },
    {
      projectTitle: "Containerization & Deployment on AWS",
      projectDescription:
        "Containerized and deployed a product to AWS using Docker and GitHub Container Registry (GHCR). Orchestrated deployment with Kubernetes, implementing Ingress, Services, Deployments, and CronJobs for scalable and efficient cloud-native operations.",
      projectTech: ["csharp", "docker", "aws", "kubernetes"],
      projectLink: "https://github.com/username/weather-dashboard",
    },
  ];



  return (
    <div className="ProjectsDiv">
      <p className="project">Projects</p>
      <div className="itemContainer">

        <div className="slider" >
          {ProjectsArr.map((projectObj, index) => (
            <div key={index} className="projectDiv">
              <p className="projectTitle">{projectObj.projectTitle}</p>
              <div className="projectBody">
                <p className="projectDescription">{projectObj.projectDescription}</p>
                <p className="projectTech"><TechInProject svgArr={projectObj.projectTech}/> </p>
                <p className='githubProj'><img className='githubImage' src='src/assets/github.svg'></img><a href={projectObj.projectLink} className="projectGithubLink">View Code</a></p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
