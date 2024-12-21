import './project.css'
import ImageGallery from '../ImageGallery/ImageGallery'


const Project = ({header, body, visual}) =>{
    console.log("visual"+visual)
    console.log(Array.isArray(visual))
    return(
        <div className='ProjectDiv'>
            <p className='projectHeader'>{header}</p>
            <p className='projectBody'>{body}</p>
            <ImageGallery mediaPaths={visual}/>
        </div>
    )
}

export default Project

