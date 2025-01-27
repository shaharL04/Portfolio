import './TechInProject.css';

const TechInProject = ({svgArr}) => {
    return (
        <div className='techIconWrapper'>
            {svgArr.map((svgPath, index) => (
                <div className='imgWrapper'>
                    <img key={index} className="techIcon" src={`src/assets/${svgPath}.svg`} alt="techIcon" />
                </div>
            ))}
        </div>
    );
};

export default TechInProject;