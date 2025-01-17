import './project.css'
import ImgGallery from '../ImageGallery/ImgGallery'


const Project = ({header, body, visual}) =>{
    console.log("visual"+visual)
    console.log(Array.isArray(visual))
    return(
        <div className='ProjectDiv'>
            <p className='projectHeader'>{header}</p>
            <p className='projectBody'>{body}</p>
            <ImgGallery mediaPaths={visual}/>
        </div>
    )
}

export default Project

