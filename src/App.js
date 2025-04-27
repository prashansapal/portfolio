import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import MyProjects from './components/MyProjects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <MyProjects />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
