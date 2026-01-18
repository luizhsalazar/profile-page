import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] h-20 transition-all duration-200 ${
      scrolled ? 'bg-navy-dark/90 backdrop-blur-md border-b border-white/10' : ''
    }`}>
      <div className="max-w-container mx-auto px-6 lg:px-12 xl:px-16 h-full flex items-center justify-between">
        <div 
          className="text-xl font-semibold text-text-primary cursor-pointer transition-colors hover:text-coral"
          onClick={() => scrollToSection('hero')}
        >
          Portfolio
        </div>
        <ul className="flex list-none gap-6 lg:gap-8 items-center">
          <li>
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
              className="text-sm lg:text-base font-medium text-text-primary opacity-80 transition-all duration-200 hover:opacity-100 hover:text-coral relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-coral after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              className="text-sm lg:text-base font-medium text-text-primary opacity-80 transition-all duration-200 hover:opacity-100 hover:text-coral relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-coral after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
              className="text-sm lg:text-base font-medium text-text-primary opacity-80 transition-all duration-200 hover:opacity-100 hover:text-coral relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-coral after:transition-all after:duration-300 hover:after:w-full"
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="text-sm lg:text-base font-medium text-text-primary opacity-80 transition-all duration-200 hover:opacity-100 hover:text-coral relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-coral after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
