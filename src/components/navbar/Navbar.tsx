import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars as Hamburger } from 'react-icons/fa';
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
            Barbershop
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <Link onClick={handleShowNavbar} to="home-section" smooth={true} delay={300} duration={500}>Home</Link>
            </li>
            <li>
              <Link onClick={handleShowNavbar}  to="blog-section" smooth={true} delay={300} duration={500}>Blog</Link>
            </li>
            <li>
              <Link onClick={handleShowNavbar}  to="projects-section" smooth={true} delay={300} duration={500}>Projects</Link>
            </li>
            <li>
              <Link onClick={handleShowNavbar}  to="about-section" smooth={true} delay={300} duration={500}>About</Link>
            </li>
            <li>
              <Link onClick={handleShowNavbar}  to="contact-section" smooth={true} delay={300} duration={500}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar