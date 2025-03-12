import React, { useState } from "react";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="title">My Portfolio</div>
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li onClick={() => onNavigate("home")}>Home</li>
          <li onClick={() => onNavigate("about")}>About</li>
          <li onClick={() => onNavigate("work")}>Work</li>
          <li onClick={() => onNavigate("skills")}>Skills</li>
          <li onClick={() => onNavigate("testimonials")}>Testimonials</li>
          <li onClick={() => onNavigate("contact")}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



