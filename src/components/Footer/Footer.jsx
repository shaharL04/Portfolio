import Github from "../../assets/Github";
import Linkedin from "../../assets/linkedin";
import Instagram from "../../assets/Instagram";
import Facebook from "../../assets/facebook";
import "./footer.css";

const Footer = () => {
    

    const handleClick = (platform) => {
        switch (platform) {
          case 'github':
            window.open('https://github.com', '_blank');
            break;
          case 'linkedin':
            window.open('https://linkedin.com', '_blank');
            break;
          case 'instagram':
            window.open('https://instagram.com', '_blank');
            break;
          case 'facebook':
            window.open('https://facebook.com', '_blank');
            break;
          default:
            console.log('Unknown platform');
        }
      };

      
  return (
    <div className="footerDivWrapper">
      <div className="footerDiv">
        <button onClick={() => handleClick("github")} className="iconButton">
          <Github />
        </button>
        <button onClick={() => handleClick("linkedin")} className="iconButton">
          <Linkedin />
        </button>
        <button onClick={() => handleClick("instagram")} className="iconButton">
          <Instagram />
        </button>
        <button onClick={() => handleClick("facebook")} className="iconButton">
          <Facebook />
        </button>
      </div>
    </div>
  );
};

export default Footer;
