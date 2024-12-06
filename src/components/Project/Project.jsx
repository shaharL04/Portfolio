import './project.css'


const Project = ({header, body, visual}) =>{

    return(
        <div className='ProjectDiv'>
            <p className='projectHeader'>{header}</p>
            <p className='projectBody'>{body}</p>
            <p className='projectVisual'>{visual}</p>
        </div>
    )
}

export default Project

