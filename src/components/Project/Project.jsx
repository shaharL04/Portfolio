import './project.css'
import Gallery from '../Gallery/Gallery'


const Project = ({header, body, visual}) =>{
    console.log("visual"+visual)
    console.log(Array.isArray(visual))
    return(
        <div className='ProjectDiv'>
            <p className='projectHeader'>{header}</p>
            <p className='projectBody'>{body}</p>
            <Gallery mediaPaths={visual}/>
        </div>
    )
}

export default Project

