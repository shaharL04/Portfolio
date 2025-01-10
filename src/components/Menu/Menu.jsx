
import './menu.css';

const Menu = ({ aboutMeRef, stackRef, projectsRef }) => {

    const handleScroll = (sectionRef) => {
        if (sectionRef && sectionRef.current) {
            window.scrollTo({
                top: sectionRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const properties = [
        {
            sectionName: "About Me",
            sectionRef: aboutMeRef
        },
        {
            sectionName: "Stack",
            sectionRef: stackRef
        },
        {
            sectionName: "Projects",
            sectionRef: projectsRef
        },
    ];

    return (
        <div className='wrapperDiv'>
            <div className='menuProp'>
                {properties.map((property, index) => {
                    return (
                        <div key={index} className={`property${index}`}>
                            <button onClick={() => handleScroll(property.sectionRef)}>
                                {property.sectionName}
                            </button>
                        </div>
                    );
                })}
            </div>
            <img className="menuPng" src='/menu.png' alt="Menu" />
        </div>
    );
}

export default Menu;
