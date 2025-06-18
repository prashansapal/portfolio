import React from 'react';

function Projects() {
  return (
    <section id="work-experience" className="projects">
      <h2>Work Experience</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>John Deere India | The Interactive Infrastructure Web Portal</h3>
          <p className="project-duration">October 2023 - December 2023</p>
          <p>During my Frontend Development Internship at John Deere India, I built a centralized React.js portal for 60+ team members with interactive UI components and Lottie animations, increasing user engagement by 40%. Reduced resource search time from 10 to 2 minutes and integrated 50+ internal tools, improving operational efficiency by 30%.</p>
          <div className="project-tech">
            <span>React.js</span>
            <span>HTML/CSS</span>
            <span>Power BI</span>
            <span>Node.js</span>
            <span>UI Components</span>
          </div>
        </div>

        <div className="project-card">
          <h3>Flixdin Pvt. Ltd. | Website and Mobile Application Interface</h3>
          <p className="project-duration">May 2023 - July 2023</p>
          <p>As UI/UX Design Team Head at Flixdin, I led a team of 10 designers in developing a comprehensive social platform for film professionals. Created 200+ Figma screens and implemented an atomic design system that accelerated iterations by 30% and reduced onboarding time by 40%. Established cross-platform consistency through standardized components, delivering intuitive experiences for 100,000+ industry professionals.</p>
          <div className="project-tech">
            <span>UI/UX Design</span>
            <span>Mobile Design</span>
            <span>Cross-platform</span>
          </div>
        </div>

        <div className="project-card">
          <h3>Younglabs | Website Interface</h3>
          <p className="project-duration">November 2024 - December 2024</p>
          <p>At Younglabs, I successfully transitioned from HR to build a responsive React.js website that reduced load times by 15% and increased engagement by 45% for 1,000+ users. Implemented modern UI/UX design increasing session duration from 5 to 6.5 minutes, and developed mobile-first architecture improving accessibility scores from 75% to 92% with 25% higher mobile retention.</p>
          <div className="project-tech">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>UX Research</span>
            <span>Responsive Design</span>
          </div>
        </div>

        <div className="project-card">
          <h3>IxDA | International Non-profit Design Chapter</h3>
          <p className="project-duration">October 2022 - January 2025</p>
          <p>As Projects Head and Senior Core Member at the Interaction Design Association (IxDA) VIT Vellore chapter, I led 12+ UX/UI projects with 100% completion and 40% faster delivery. Managed 15+ designers, mentored 25+ juniors with 90% retention, and partnered with three international chapters. Organized workshops for 200+ attendees and implemented workflows reducing turnaround by 30%.</p>
          <div className="project-tech">
            <span>Design Leadership</span>
            <span>Project Management</span>
            <span>Quality Assurance</span>
            <span>Team Coordination</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;