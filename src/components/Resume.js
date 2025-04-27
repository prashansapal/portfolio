import React from 'react';

function Resume() {
  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      <div className="resume-container">
        <p>Download my resume to learn more about my experience and skills.</p>
        <a 
          href="/resume.pdf" 
          download="Prashansa_Pal_Resume.pdf"
          className="download-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;