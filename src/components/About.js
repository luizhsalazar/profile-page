import React from 'react';

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
    <section id="about" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 xl:px-16 bg-navy-dark">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12 lg:gap-24 items-start">
          <div className="relative pt-6 lg:block flex justify-around">
            {services.map((service, index) => (
              <div key={index} className="relative flex lg:flex-row flex-col items-center gap-6 py-6 lg:py-6">
                <div className="text-3xl w-12 h-12 flex items-center justify-center flex-shrink-0">{service.icon}</div>
                <div className="text-base text-text-secondary font-medium lg:text-left text-center">{service.title}</div>
                {index < services.length - 1 && (
                  <div className="absolute left-6 top-16 lg:block hidden w-0.5 h-full bg-gradient-to-b from-coral to-transparent opacity-50"></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-text-primary mb-6">
              About me
            </h2>
            <p className="text-lg leading-relaxed text-text-secondary max-w-3xl">
              I'm a passionate software developer with over a decade of experience creating 
              innovative web solutions and applications. My journey in tech has been driven by 
              a love for clean code, user-centered design, and continuous learning. I specialize 
              in building responsive, performant applications that solve real-world problems while 
              delivering exceptional user experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="p-8 bg-transparent border border-slate-light/30 rounded-lg text-center transition-all duration-200 hover:border-coral hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
                >
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-coral leading-tight mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-text-muted uppercase tracking-wider">
                    {stat.label}
                  </div>
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
