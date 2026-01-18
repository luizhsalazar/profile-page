import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer | AI Engineer',
      company: 'CIASC - Centro de Informática e Automação de SC',
      location: 'Florianópolis, Santa Catarina, Brazil',
      period: 'September 2019 – Present (6 years 5 months)',
      description: 'Leading software development initiatives for digital transformation of government services in Santa Catarina. Architecting and implementing scalable AI-driven solutions, focusing on machine learning applications and intelligent automation systems. Collaborating with cross-functional teams to modernize legacy infrastructure and deliver high-performance applications that serve millions of citizens.',
      technologies: ['Java', 'Spring Boot', 'Angular 2+', 'Python', 'AI Engineering', 'System Architecture', 'Docker', 'Kubernetes'],
      imageSide: 'left'
    },
    {
      title: 'Software Engineer',
      company: 'Infinity Copy',
      location: 'Remote',
      period: 'April 2022 – December 2022 (9 months)',
      description: 'Developed and optimized software solutions for enterprise clients. Implemented robust backend systems and contributed to architectural decisions for scalable cloud-based applications.',
      technologies: ['C#', '.NET Core', 'Software Engineering', 'Cloud Architecture', 'Backend Development', 'Azure'],
      imageSide: 'right'
    },
    {
      title: 'Software Engineer',
      company: 'CREA - SC',
      location: 'Florianópolis, Santa Catarina, Brazil',
      period: 'May 2017 – August 2019 (2 years 4 months)',
      description: 'Architected and developed a comprehensive web platform to replace legacy desktop systems, executing a complete migration strategy. Applied Domain-Driven Design (DDD) principles and RESTful API architecture patterns. Led agile development using SCRUM methodology, delivering high-quality solutions with modern technology stacks including C#, Python, TypeScript, .NET Core, Entity Framework, SQL Server, Angular 2+, and Elasticsearch for advanced search capabilities.',
      technologies: ['C#', 'TypeScript', '.NET Core', 'Angular 2+', 'Entity Framework', 'SQL Server', 'Elasticsearch', 'DDD'],
      imageSide: 'left'
    },
    {
      title: 'Back End Developer',
      company: 'Tiki',
      location: 'Florianópolis, Santa Catarina, Brazil',
      period: 'January 2016 – May 2017 (1 year 5 months)',
      description: 'Engineered e-commerce platforms and digital marketing applications, including high-conversion landing pages. Built performant backend systems using PHP with Symfony2 framework, Doctrine ORM, and MySQL.',
      technologies: ['PHP', 'Symfony2', 'Doctrine', 'MySQL', 'JavaScript', 'AngularJS', 'E-commerce'],
      imageSide: 'right'
    },
    {
      title: 'Back End Developer',
      company: 'Labsoft (INE/UFSC)',
      location: 'Florianópolis, Santa Catarina, Brazil',
      period: 'September 2013 – December 2015 (2 years 4 months)',
      description: 'Developed backend systems and contributed to research projects at the Federal University of Santa Catarina. Worked on academic and commercial software solutions, applying best practices in software engineering and system design.',
      technologies: ['PHP', 'Ruby', 'Rails', 'Backend Development', 'Software Engineering'],
      imageSide: 'left'
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 xl:px-16 bg-navy-darker">
      <div className="max-w-container mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-text-primary mb-2">
          Professional Experience
        </h2>
        <div className="w-[60px] h-[3px] bg-coral mx-auto mb-16 lg:mb-24"></div>
        <div className="flex flex-col gap-16 lg:gap-24">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 lg:p-12 bg-navy-darker border border-slate-light/30 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-coral/30 hover:shadow-xl hover:shadow-black/20 hover:shadow-coral/15 ${
                exp.imageSide === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`flex flex-col gap-6 ${exp.imageSide === 'right' ? 'lg:order-2' : ''}`}>
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-text-primary mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                    <span className="text-lg text-coral font-medium">{exp.company}</span>
                    <span className="text-sm text-text-muted hidden sm:inline">•</span>
                    <span className="text-base text-text-secondary">{exp.location}</span>
                  </div>
                  <p className="text-sm text-text-muted mb-4">{exp.period}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs px-3 py-1 bg-transparent border border-gray/30 rounded text-text-muted uppercase tracking-wider transition-all duration-200 hover:border-coral hover:text-coral"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-base leading-relaxed text-text-secondary">
                  {exp.description}
                </p>
              </div>
              <div className={`relative rounded-lg overflow-hidden aspect-video ${exp.imageSide === 'right' ? 'lg:order-1' : ''}`}>
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

export default Experience;
