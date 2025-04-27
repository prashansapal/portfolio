import React from 'react';
import resume from '../assets/images/resume.png';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>I am Prashansa Pal, a UI/UX designer with a strong technical foundation pursuing Information Technology at Vellore Institute of Technology (graduating 2025). I specialize in creating intuitive, user-centered experiences that bridge aesthetic design with functionality.
As UI/UX Design Team Head at Flixdin, I led a team of 10 designers to develop comprehensive interfaces for film industry professionals, creating over 200 screens and implementing atomic design systems that accelerated iterations by 30%. My leadership as Projects Head at the Interaction Design Association (IxDA) chapter allowed me to mentor emerging designers while managing multiple design projects with consistent success.
With expertise in Figma, Adobe XD, and various design methodologies alongside technical skills in React.js and frontend development, I transform complex requirements into clean, engaging user experiences that deliver measurable improvements in engagement, efficiency, and accessibility.</p>
          <div className="resume-container">
            <a href={resume} target="_blank" rel="noopener noreferrer" className="view-resume-btn">
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;