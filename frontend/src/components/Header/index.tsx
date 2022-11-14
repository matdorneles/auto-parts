import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faGear, faBars } from "@fortawesome/free-solid-svg-icons"
//import { faBars } from "@fortawesome/free-regular-svg-icons";

function Header() {
  const whatsappIcon = <FontAwesomeIcon icon={faWhatsapp} />
  const gearIcon = <FontAwesomeIcon icon={faGear} />
  const menuIcon = <FontAwesomeIcon icon={faBars} />

  return (
    <header>
      <i>{menuIcon}</i>
      <a href='/' className='logo'>
        <h3><i>{gearIcon}</i> Logo</h3>
      </a>
      <a href='/whatsapp' className='header-item'><i>{whatsappIcon}</i></a>
    </header>
  );
}

export default Header;