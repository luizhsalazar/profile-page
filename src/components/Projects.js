import React from 'react';

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
    <section id="projects" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 xl:px-16 bg-navy-darker">
      <div className="max-w-container mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-text-primary mb-2">
          Projects
        </h2>
        <div className="w-[60px] h-[3px] bg-coral mx-auto mb-16 lg:mb-24"></div>
        <div className="flex flex-col gap-16 lg:gap-24">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 lg:p-12 bg-navy-darker border border-slate-light/30 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-coral/30 hover:shadow-xl hover:shadow-black/20 hover:shadow-coral/15 ${
                project.imageSide === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`flex flex-col gap-6 ${project.imageSide === 'right' ? 'lg:order-2' : ''}`}>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-text-primary">
                  {project.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs px-3 py-1 bg-transparent border border-gray/30 rounded text-text-muted uppercase tracking-wider transition-all duration-200 hover:border-coral hover:text-coral"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-base leading-relaxed text-text-secondary">
                  {project.description}
                </p>
                <div className="flex gap-6 flex-wrap mt-2">
                  <a 
                    href={project.githubUrl} 
                    className="px-4 py-2 bg-gradient-to-r from-coral to-orange text-white font-semibold rounded-md text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-coral/30"
                  >
                    View GitHub
                  </a>
                  <a 
                    href={project.projectUrl} 
                    className="px-4 py-2 bg-transparent text-white text-sm transition-all duration-200 hover:text-coral hover:underline"
                  >
                    View project →
                  </a>
                </div>
              </div>
              <div className={`relative rounded-lg overflow-hidden aspect-video ${project.imageSide === 'right' ? 'lg:order-1' : ''}`}>
                <div className="w-full h-full bg-code-bg border border-slate-light/50 rounded-lg flex items-center justify-center p-8">
                  <div className="w-full flex flex-col gap-2">
                    <div className="h-3 bg-coral/60 rounded w-full"></div>
                    <div className="h-3 bg-slate rounded w-full"></div>
                    <div className="h-3 bg-orange/40 rounded w-3/5"></div>
                    <div className="h-3 bg-slate rounded w-full"></div>
                    <div className="h-3 bg-slate rounded w-2/5"></div>
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
