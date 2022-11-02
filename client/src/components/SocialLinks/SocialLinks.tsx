import fbIcon from "../../images/social-icons/facebook-3-logo-png-transparent.png";
import instaIcon from "../../images/social-icons/Instagram_logo_2016.svg.webp";
import tgIcov from "../../images/social-icons/telegram-logo-png-transparent.png";
import "../../styles/SocialLinks/SocialLinks.scss"

const SocialLinks = () => {
  return (
    <div className="social-links">
      <ul className="social-links__list">
        <li className="social-links__item"><img alt="facebook" src={fbIcon} width="35" height="35"/></li>
        <li className="social-links__item"><img alt="instagram" src={instaIcon} width="35" height="35"/></li>
        <li className="social-links__item"><img alt="telegram" src={tgIcov} width="35" height="35"/></li>
      </ul>
    </div>
  );
};

export default SocialLinks;
