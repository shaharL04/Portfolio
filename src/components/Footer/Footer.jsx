import Github from "../../assets/Github";
import Linkedin from "../../assets/Linkedin";
import Instagram from "../../assets/Instagram";
import Facebook from "../../assets/facebook";
import "./footer.css";

const Footer = () => {
    

    const handleClick = (platform) => {
        switch (platform) {
          case 'github':
            window.open('https://github.com/shaharL04', '_blank');
            break;
          case 'linkedin':
            window.open('https://linkedin.com', '_blank');
            break;
          case 'instagram':
            window.open('https://www.instagram.com/_shaharliba_/', '_blank');
            break;
          case 'facebook':
            window.open('https://www.facebook.com/p/%D7%A9%D7%97%D7%A8-%D7%9C%D7%99%D7%91%D7%94-100006702669751/?locale=he_IL', '_blank');
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
