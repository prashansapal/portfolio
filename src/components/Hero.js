import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero">
      <h1>Hi, I'm Prashansa Pal</h1>
      <p>UI/UX Designer & Frontend Developer</p>
      <p>B.Tech in Information Technology | Vellore Institute of Technology</p>
      <button className="cta-button" onClick={() => document.getElementById('work-experience').scrollIntoView({ behavior: 'smooth' })}>
        View My Work
      </button>
    </section>
  );
}

export default Hero;