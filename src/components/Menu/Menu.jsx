import { useState } from 'react';
import './Menu.css';

const Menu = ({  aboutMeRef, stackRef}) => {
  
  const MenuPropsArr = [
    {
      menuTitle: "About Me",
      menuImgPath: "src/assets/person.svg"
    },
    {
      menuTitle: "Stack",
      menuImgPath: "src/assets/stack.svg"
    },
    {
      menuTitle: "Projects",
      menuImgPath: "src/assets/paper.svg"
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
          onClick={redirectToSection(menuObj.menuTitle)}
        >
            <img className= "menuImg" src={menuObj.menuImgPath} />
            <span className='menuText'>{menuObj.menuTitle}</span>
          </button>
        ))}
        </div>
    );
};

export default Menu;