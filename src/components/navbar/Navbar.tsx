import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars as Hamburger, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { ReactComponent as Brand } from '../../assets/icons/barbershop-logo2.svg'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className="navbar-text">
            Andreaus Barbershop
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <Link onClick={handleShowNavbar} to="home-section" smooth={true} duration={500}>Home</Link>
            </li>
            <li>
              <Link onClick={handleShowNavbar}  to="blog-section" smooth={true} duration={500}>Blog</Link>
            </li>
            <li>
              <Link onClick={handleShowNavbar}  to="projects-section" smooth={true} duration={500}>Projects</Link>
            </li>
            <li>
              <Link onClick={handleShowNavbar}  to="about-section" smooth={true} duration={500}>About</Link>
            </li>
            <li>
              <Link onClick={handleShowNavbar}  to="contact-section" smooth={true} duration={500}>Contact</Link>
            </li>
          </ul>
        </div>
        <div>
        <a  href="https://www.google.com/maps/search/?api=1&query=Nygatan 19, 151 73 Södertälje"> <FaMapMarkerAlt className="contact-info-icon" /> Nygatan 19, 151 73 Södertälje</a>
        <a  href="tel:08-550 666 76"> <FaPhone className="contact-info-icon" /> 08-550 666 76</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar