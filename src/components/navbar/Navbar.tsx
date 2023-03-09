import { useState, useEffect, useRef } from 'react'
import { FaDirections } from 'react-icons/fa';
import { RiPhoneFill } from 'react-icons/ri'
import { Link } from 'react-scroll'
import { Turn as Hamburger } from 'hamburger-react'
import './Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
    setOpen(!isOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
      setShowNavbar(false)
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div ref={navbarRef}>
      <nav className="navbar">
        <div className="container">
          <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <div className="menu-icon" onClick={handleShowNavbar}>
              <Hamburger size={20} direction="right" toggled={isOpen} toggle={setOpen}/>
            </div>
            <div className="navbar-text" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Andreaus Barbershop
            </div>
          </div>
          <div className="icons-container">
            <a className="navbar-icon" href="tel:08-711 92 08">
              <RiPhoneFill style={{marginRight: "7px"}} />
              Ring nu
            </a>
            <a className="navbar-icon" href="https://www.google.com/maps/search/?api=1&query=Kvarnängsvägen 5, 141 49 Huddinge"> 
              <FaDirections style={{marginRight: "7px"}} />
              Visa vägen
            </a>
          </div>
        </div>
      </nav>
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
  </div>
  )
}

export default Navbar