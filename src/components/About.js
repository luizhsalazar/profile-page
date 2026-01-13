import React from 'react';
import './About.css';

const About = () => {
  const services = [
    { icon: '🌐', title: 'Website Development' },
    { icon: '📱', title: 'App Development' },
    { icon: '☁️', title: 'Website Hosting' }
  ];

  const stats = [
    { number: '120+', label: 'Completed Projects' },
    { number: '95%', label: 'Client satisfaction' },
    { number: '10+', label: 'Years of experience' }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-sidebar">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-icon">{service.icon}</div>
                <div className="service-text">{service.title}</div>
                {index < services.length - 1 && <div className="service-connector"></div>}
              </div>
            ))}
          </div>
          <div className="about-main">
            <h2 className="about-heading">About me</h2>
            <p className="about-text">
              I'm a passionate software developer with over a decade of experience creating 
              innovative web solutions and applications. My journey in tech has been driven by 
              a love for clean code, user-centered design, and continuous learning. I specialize 
              in building responsive, performant applications that solve real-world problems while 
              delivering exceptional user experiences.
            </p>
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
