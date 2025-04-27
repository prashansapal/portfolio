import React from 'react';

function Header() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">Prashansa Pal</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#work-experience">Work Experience</a></li>
          <li><a href="#myprojects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;