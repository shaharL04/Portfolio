import './Project.css';

const Project = ({PorjectsArr, }) => {
    return(
        <div className='ProjectDiv'>
            <p className='project'>Projects</p>
            <p className='projectText'>SOME PROJECTS I’VE WORKED ON:</p>
            <p className='projectImg'>
                <img src='src/assets/projects.svg'></img>
            </p>
        </div>
    )
}