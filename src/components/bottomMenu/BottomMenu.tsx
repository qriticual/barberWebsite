import './BottomMenu.css'
import { FaDirections } from 'react-icons/fa';
import { RiPhoneFill } from 'react-icons/ri'


const BottomMenu = () => {
  return (
    <nav className="bottom-menu">
        <a className="bottom-menu-icon" href="tel:08-711 92 08">
            <RiPhoneFill style={{marginRight: "7px"}} />
            Ring nu
        </a>
        <a className="bottom-menu-icon" href="https://www.google.com/maps/search/?api=1&query=Vissätra Salong Andraus, Kvarnängsvägen, Huddinge"> 
            <FaDirections style={{marginRight: "7px"}} />
            Visa vägen
        </a>
    </nav>
  )
}

export default BottomMenu;