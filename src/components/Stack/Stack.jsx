import './stack.css'
import Tech from '../../assets/Tech'

const Stack = () => {


    return(
        <div className='StackDiv'>
            <p className='stack'>Stack</p>
            <p className='techExmpP'>SOME TECHNOLOGIES I’VE WORKED WITH:</p>
            <p className='techExmpSvg'>
                <Tech/>
            </p>
        </div>
    )
}

export default Stack