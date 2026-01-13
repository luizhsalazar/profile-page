import React from 'react';
import './Hero.css';

const Hero = () => {
  const techIcons = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'Git', 'GitHub'];

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-heading">
              Hello. <span className="hero-name">I'm John Doe</span>
            </h1>
            <p className="hero-title">Software Developer</p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get a project</button>
              <button className="btn btn-secondary">My resume</button>
            </div>
            <div className="hero-tech">
              {techIcons.map((tech, index) => (
                <span key={index} className="tech-icon">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <div className="gradient-ring"></div>
              <div className="photo-placeholder">
                <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
                  <circle cx="150" cy="150" r="150" fill="url(#gradient)"/>
                  <defs>
                    <radialGradient id="gradient" cx="50%" cy="50%">
                      <stop offset="0%" stopColor="#FF6B6B"/>
                      <stop offset="100%" stopColor="#FF8A4C" stopOpacity="0.3"/>
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <div className="bracket bracket-left">&lt;</div>
              <div className="bracket bracket-right">&gt;</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
