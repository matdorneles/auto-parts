import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faGear, faBars } from "@fortawesome/free-solid-svg-icons"

function Header() {
  const whatsappIcon = <FontAwesomeIcon icon={faWhatsapp} />
  const gearIcon = <FontAwesomeIcon icon={faGear} />
  const menuIcon = <FontAwesomeIcon icon={faBars} />

  return (
    <header>
      <i>{menuIcon}</i>
      <a href='/' className='logo'>
        <span><i>{gearIcon}</i> Logo</span>
      </a>
      <a href='/whatsapp'><i>{whatsappIcon}</i></a>
    </header>
  );
}

export default Header;