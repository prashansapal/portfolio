import React from 'react';

function Projects() {
  return (
    <section id="work-experience" className="projects">
      <h2>Work Experience</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>John Deere India | The Interactive Infrastructure Web Portal</h3>
          <p className="project-duration">October 2023 - December 2023</p>
          <p>During my Frontend Development Internship at John Deere India, I architected a centralized web portal using React.js that transformed how 60+ infrastructure team members accessed resources. I implemented interactive UI components and Lottie animations that boosted user engagement by 40%, while my intuitive interface design reduced search time from 10 to 2 minutes per session. By developing a comprehensive link management system integrating 50+ internal tools and establishing a standardized design system, I delivered a 30% improvement in team operational efficiency while optimizing overall portal performance.</p>
          <div className="project-tech">
            <span>React.js</span>
            <span>HTML/CSS</span>
            <span>UI Components</span>
          </div>
        </div>

        <div className="project-card">
          <h3>Flixdin Pvt. Ltd. | Website and Mobile Application Interface</h3>
          <p className="project-duration">May 2023 - July 2023</p>
          <p>As UI/UX Design Team Head at Flixdin, I led a team of 10 designers in developing a comprehensive social platform for film industry professionals. I created over 200 screens in Figma while implementing an atomic design system that accelerated iterations by 30% and reduced user onboarding time by 40%. My leadership ensured cross-platform design consistency through a standardized component library, ultimately delivering intuitive user experiences tailored to the needs of 100,000+ film industry professionals across both web and mobile interfaces.</p>
          <div className="project-tech">
            <span>UI/UX Design</span>
            <span>Mobile Design</span>
            <span>Cross-platform</span>
          </div>
        </div>

        <div className="project-card">
          <h3>Younglabs | Website Interface</h3>
          <p className="project-duration">November 2024 - December 2024</p>
          <p>At Younglabs, I successfully transitioned from HR to Frontend Development, where I engineered a responsive website architecture using React.js and JavaScript. This improvement reduced load times by 15% and increased platform engagement by 45% across 1,000+ monthly users. I implemented a modern UI/UX design system that boosted average session duration from 5 to 6.5 minutes and developed a mobile-first approach with cross-browser compatibility that improved accessibility scores from 75% to 92%, resulting in a 25% increase in mobile user retention.</p>
          <div className="project-tech">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>Responsive Design</span>
          </div>
        </div>

        <div className="project-card">
          <h3>IxDA | International Non-profit Design Chapter</h3>
          <p className="project-duration">October 2022 - January 2025</p>
          <p>As Projects Head and Senior Core Member at the Interaction Design Association (IxDA) VIT Vellore chapter (October 2022-January 2025), I led 12+ UX/UI design projects with a 100% completion rate and 40% faster delivery times. After advancing from Senior Core Member to Projects Head within two years, I managed a team of 15+ designers and core members while mentoring 25+ junior designers through an 8-week program with 90% participant retention. I established partnerships with three international IxDA chapters, organized five collaborative design workshops attracting 200+ attendees, and implemented a standardized design workflow system that reduced project turnaround time by 30% while significantly improving team coordination.</p>
          <div className="project-tech">
            <span>Design Leadership</span>
            <span>Project Management</span>
            <span>Team Coordination</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;