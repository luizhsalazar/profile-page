import React from 'react';

const Hero = () => {
  const techIcons = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'Git', 'GitHub'];

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-navy-dark to-navy-darker flex items-center pt-20 relative">
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-12 xl:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-text-primary">
              Hello. <span className="block text-coral">I'm John Doe</span>
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl text-text-secondary font-normal">
              Software Developer
            </p>
            <div className="flex gap-6 flex-wrap">
              <button className="px-6 py-3 bg-gradient-to-r from-coral to-orange text-white font-semibold rounded-md transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-coral/30">
                Get a project
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-md transition-all duration-200 hover:bg-white/10 hover:border-coral hover:text-coral">
                My resume
              </button>
            </div>
            <div className="flex flex-wrap gap-6 mt-4">
              {techIcons.map((tech, index) => (
                <span 
                  key={index} 
                  className="text-sm text-text-muted opacity-60 transition-all duration-200 hover:opacity-100 hover:text-coral"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center relative lg:order-none order-first">
            <div className="relative w-full max-w-[300px] lg:max-w-[400px] aspect-square">
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full opacity-30 z-0"
                style={{
                  background: 'radial-gradient(circle, #FF6B6B 0%, #FF8A4C 50%, transparent 70%)'
                }}
              ></div>
              <div className="relative w-full h-full rounded-full overflow-hidden z-10 border-[3px] border-coral/20">
                <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" className="w-full h-full">
                  <circle cx="150" cy="150" r="150" fill="url(#gradient)"/>
                  <defs>
                    <radialGradient id="gradient" cx="50%" cy="50%">
                      <stop offset="0%" stopColor="#FF6B6B"/>
                      <stop offset="100%" stopColor="#FF8A4C" stopOpacity="0.3"/>
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <div className="absolute top-[10%] -left-[10%] text-8xl lg:text-[8rem] font-bold text-coral opacity-20 z-20 -rotate-[15deg] transition-all duration-200 hover:opacity-40 hover:scale-110 font-code">
                &lt;
              </div>
              <div className="absolute bottom-[10%] -right-[10%] text-8xl lg:text-[8rem] font-bold text-coral opacity-20 z-20 rotate-[15deg] transition-all duration-200 hover:opacity-40 hover:scale-110 font-code">
                &gt;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
