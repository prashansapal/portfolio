import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {isMenuOpen && <div className="nav-backdrop" onClick={toggleMenu}></div>}
      <div className="nav-content">
        <div className="logo">Prashansa Pal</div>
        <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#work-experience" onClick={toggleMenu}>Work Experience</a></li>
          <li><a href="#myprojects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#resume" onClick={toggleMenu}>Resume</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
        <div className={`nav-toggle ${isMenuOpen ? 'toggle-active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Header;