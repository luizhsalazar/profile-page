import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'Battleship Game',
      description: 'A classic naval strategy game built with vanilla JavaScript. Features intelligent AI opponent, drag-and-drop ship placement, and smooth animations. Demonstrates advanced DOM manipulation and game logic implementation.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageSide: 'left',
      githubUrl: '#',
      projectUrl: '#'
    },
    {
      name: 'Movie Titles API',
      description: 'A dynamic movie database application that integrates with a RESTful API. Features search functionality, movie details, favorites system, and responsive design. Built with modern async/await patterns and error handling.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      imageSide: 'right',
      githubUrl: '#',
      projectUrl: '#'
    },
    {
      name: 'Calculator App',
      description: 'A fully functional calculator with advanced mathematical operations. Clean, intuitive interface with keyboard support. Built with React for component-based architecture and state management.',
      technologies: ['React', 'CSS', 'JavaScript'],
      imageSide: 'left',
      githubUrl: '#',
      projectUrl: '#'
    },
    {
      name: 'SaaS Landing Page',
      description: 'A modern, conversion-optimized landing page for a SaaS product. Features hero section, feature highlights, testimonials, and pricing tables. Built with attention to conversion rate optimization and user experience.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      imageSide: 'right',
      githubUrl: '#',
      projectUrl: '#'
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="projects-heading">Projects</h2>
        <div className="projects-underline"></div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.imageSide === 'right' ? 'reverse' : ''}`}>
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <div className="project-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="project-tag">{tech}</span>
                  ))}
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-buttons">
                  <a href={project.githubUrl} className="btn btn-primary btn-small">
                    View GitHub
                  </a>
                  <a href={project.projectUrl} className="btn btn-ghost btn-small">
                    View project →
                  </a>
                </div>
              </div>
              <div className="project-image">
                <div className="project-image-placeholder">
                  <div className="code-snippet">
                    <div className="code-line"></div>
                    <div className="code-line"></div>
                    <div className="code-line short"></div>
                    <div className="code-line"></div>
                    <div className="code-line short"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
