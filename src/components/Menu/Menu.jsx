import { useState } from 'react';
import './Menu.css';

const Menu = ({MenuPropsArr}) => {
    const [selectedSection, setSelectedSection] = useState("");
    const redirectToSection = (section) => () => {
        setSelectedSection(section);
        window.location.href = `#${section}`;
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