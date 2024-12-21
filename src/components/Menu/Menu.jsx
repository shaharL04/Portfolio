import './menu.css'

const Menu = () =>{

    const properties = [
        {
            sectionName: "About Me",
            sectionUrl: "/AboutMe"
        },
        {
            sectionName: "Stack",
            sectionUrl: "/Stack"
        },
        {
            sectionName: "Projects",
            sectionUrl: "/Projects"
        },
    ]
    return(
        <div>
            <div className='menuProp'>
                {properties.map((property, index)=>{
                    return (
                        <div key={index} className={`property`+index}>
                            <button onClick={property.sectionUrl}>
                                {property.sectionName}
                            </button>
                        </div>
                    );
                })}
            </div>
            <img src='/menu.png'></img>
        </div>
    )
}

export default Menu