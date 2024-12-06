import Project from '../Project/Project'
import './projects.css'


const Projects = () =>{

    const projects = [
    {
        header: "Website Vulnerability scanner",
        body: "Developed a web application to scan websites for vulnerabilities using a custom Nikto Docker container. Integrated OpenAI API to analyze and categorize detected vulnerabilities by threat level, presenting results in an intuitive format to enhance security assessment and prioritization.",
        visual: "path to visual"
    },
    {
        header: "Unitalking - Live chat app",
        body: "Built a global chat platform enabling users to create friend groups and communicate in real time via WebSocket technology, supporting multiple connections per user. Integrated LibreTranslate to allow seamless multilingual conversations, fostering inclusivity and breaking language barriers.",
        visual: "path to visual"
    },
    {
        header: "JARVIS - personal AI assistant",
        body: "Created a real-time AI assistant using the OpenAI API, with voice and text interactions. Implemented bi-directional WebSocket connections for low-latency processing. Integrated tools for practical functionalities like weather updates, news retrieval, and email automation, showcasing expertise in real-time architecture and AI integration.",
        visual: "path to visual"
    },
    {
        header: "Speech-to-Text project",
        body: "Designed an automated solution for processing audio using Azure Cognitive Services and REST APIs. Developed a pipeline where uploaded audio files trigger a Function App, split into chunks, and transcribed using a custom Azure Speech-to-Text model. Integrated transcription results with OpenAI APIs for summarization, sentiment analysis, and intent extraction, seamlessly delivering actionable insights to a CRM system.",
        visual: "path to visual"
    },
    {
        header: "Containerization and Deployment on AWS",
        body: "Containerized and deployed a product to AWS using Docker and GitHub Container Registry (GHCR). Orchestrated deployment with Kubernetes, implementing Ingress, Services, Deployments, and CronJobs for scalable and efficient cloud-native operations.",
        visual: "path to visual"
    }

    ]

    return(
        <div className='ProjectsDiv'>
            {projects.map((project,index) =>(
                <Project
                key={index}
                header={project.header}
                body={project.body}
                visual={project.visual}
                />
            ))}
        </div>
    )
}
//{header, body, visual}
export default Projects

