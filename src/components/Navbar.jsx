import { useState } from "react";
import { NavLink } from "react-router-dom";
//logo
import Logo from "../assets/img/logo.jpg";
//icon
import { BiMenu } from "react-icons/bi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <nav className="nav-bar">
            <ul className="nav-list">
              <li className="nav-item">
              
                <NavLink className="a" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="a" to="/menu">
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="a" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="a" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="a" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="a" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="burger-menu">
            <span className="text" onClick={() => setMenuOpen(!menuOpen)}>
              <BiMenu className="menu" />
              MENU
            </span>
          </div>
        </div>
      </div>
      <div className={menuOpen ? "mobile-menu isOpen " : "mobile-menu"}>
        <div className="container">
          <ul className="mobile-list">
            <li className="mobile-item">
              <NavLink className="a" to="/">
                Home
              </NavLink>
            </li>
            <li className="mobile-item">
              <NavLink className="a" to="/menu">
                Menu
              </NavLink>
            </li>
            <li className="mobile-item">
              <NavLink className="a" to="/services">
                Services
              </NavLink>
            </li>
            <li className="mobile-item">
              <NavLink className="a" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="mobile-item">
              <NavLink className="a" to="/about">
                About
              </NavLink>
            </li>
            <li className="mobile-item">
              <NavLink className="a" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
