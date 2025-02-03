import { useState } from 'react';
import './Menu.css';

//commit
const Menu = ({  aboutMeRef, stackRef, projectsRef}) => {
  
  const MenuPropsArr = [
    {
      menuTitle: "About Me",
      menuImgPath: "/person.svg",
      sectionRef: aboutMeRef
    },
    {
      menuTitle: "Stack",
      menuImgPath: "/stack.svg",
      sectionRef: stackRef
    },
    {
      menuTitle: "Projects",
      menuImgPath: "/paper.svg",
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
          <div className='menuDynamicDiv'>
            <ul className="menu menu-horizontal bg-base-200 rounded-box">
          {MenuPropsArr.map((menuObj, index) => ( 

            <li>
              <img src={menuObj.menuImgPath} key={index} className={`menu-item-${index} ${selectedSection === menuObj.menuTitle ? "selected" : ""}`} 
                onClick={redirectToSection(menuObj.menuTitle, menuObj.sectionRef)}>
              
              </img>
            </li>

          ))}
          </ul>
          </div>
        </div>
    );
};

export default Menu;