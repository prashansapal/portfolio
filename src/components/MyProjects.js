import React from 'react';

function MyProjects() {
  return (
    <section id="myprojects" className="myprojects">
      <h2>My Projects</h2>
      <div className="myprojects-grid">
        <div className="myproj-card">
          <h3>Taste Treat | A Mobile Group Food Ordering App</h3>
          <p>Taste Treat is a revolutionary social food ordering app that transforms group ordering into a seamless process. Users create profiles with their food preferences, and when organizing a group order, they simply "tag" friends instead of passing phones around. The app offers flexible payment options—pay immediately through the app or settle later offline—and provides real-time order tracking for all participants. This smart combination of social networking with practical food ordering makes Taste Treat the perfect solution for parties, office gatherings, or any group meal situation.</p>
          <a href="https://www.figma.com/design/Fv3sPuf9U09AaPsDXY8N44/TasteTreatFinal?node-id=0-1&p=f&t=2U9x67QpJd7A2GJa-0" target="_blank" rel="noopener noreferrer" className="view-project-btn">View in Figma</a>
        </div>

        <div className="myproj-card">
          <h3>NFTRehaul | NFT Website Re-imagined</h3>
          <p>For this project, I reimagined an NFT marketplace with a sophisticated dark-themed interface featuring rich purple accents. The design showcases a prominent hero section featuring the "Glamour Rare Collection," complemented by an organized grid gallery for browsing NFT collections. Key elements include trending "Hot Collections," detailed NFT cards with pricing information, integrated creator profiles, and marketplace statistics. I implemented a clean navigation system with search functionality and strategically placed call-to-action buttons to guide users through the purchasing process. The responsive layout ensures consistency across devices, while the immersive color palette creates visual contrast that emphasizes the vibrant NFT artwork while maintaining excellent readability.</p>
          <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className="view-project-btn">View in Figma</a>
        </div>
      </div>
    </section>
  );
}

export default MyProjects;