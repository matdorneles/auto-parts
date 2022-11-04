import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faGear } from "@fortawesome/free-solid-svg-icons"

function Header() {
  const whatsappIcon = <FontAwesomeIcon icon={faWhatsapp} />
  const gearIcon = <FontAwesomeIcon icon={faGear} />

  return (
    <header>
      <a href='/' className='header-logo'>
        <h1>{gearIcon} AutoParts</h1>
      </a>
      <a href='/' className='header-item'>Home</a>
      <a href='/products' className='header-item'>Produtos</a>
      <a href='/contact' className='header-item'>Contato</a>
      <a href='/whatsapp' className='header-item'>{whatsappIcon}</a>
    </header>
  );
}

export default Header;