import { useState } from 'react';
import './Menu.css';

//commit
const Menu = ({  aboutMeRef, stackRef, projectsRef}) => {
  
  const MenuPropsArr = [
    {
      menuTitle: "About Me",
      menuImgPath: "src/assets/person.svg",
      sectionRef: aboutMeRef
    },
    {
      menuTitle: "Stack",
      menuImgPath: "src/assets/stack.svg",
      sectionRef: stackRef
    },
    {
      menuTitle: "Projects",
      menuImgPath: "src/assets/paper.svg",
      sectionRef: projectsRef
    }
  ]

    const [selectedSection, setSelectedSection] = useState("");

    const redirectToSection = (sectionTitle,sectionRef ) => () => {

        setSelectedSection(sectionTitle);

        if (sectionRef && sectionRef.current) {
          window.scrollTo({
              top: sectionRef.current.offsetTop,
              behavior: 'smooth'
          });
      }
    }

    return (
        <div className='menuWrapper'>
        {MenuPropsArr.map((menuObj, index) => (
          <button key={index} className={`menu-item-${index} ${selectedSection === menuObj.menuTitle ? "selected" : ""}`} 
          onClick={redirectToSection(menuObj.menuTitle, menuObj.sectionRef)}
        >
            <img className= "menuImg" src={menuObj.menuImgPath} />
            <span className='menuText'>{menuObj.menuTitle}</span>
          </button>
        ))}
        </div>
    );
};

export default Menu;