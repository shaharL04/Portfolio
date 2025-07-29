import './Footer.css';

const Footer = () => {
    return (
        <div className="footerDiv">
            <a href="https://github.com/shaharL04" target="_blank" >
                <img className="socialLinks" src="/github.svg" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/shahar-liba-191163234/" target="_blank" >
                <img className="socialLinks" src="/whiteLinkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://x.com/LybhShr71679" target="_blank" >
                <img className="socialLinks" src="/whiteTwitter.svg" alt="Twitter" />
            </a>
        </div>
    );
};

export default Footer;