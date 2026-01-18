import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 xl:px-16 bg-navy-darker relative"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(255, 107, 107, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(255, 138, 76, 0.05) 0%, transparent 50%)
        `
      }}
    >
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-32">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-text-primary lg:text-left text-center">
              Have a project? Let's talk!
            </h2>
          </div>
          <div>
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent border border-slate-light rounded-md px-4 py-3 text-base text-text-primary font-primary transition-all duration-200 focus:outline-none focus:border-coral focus:ring-4 focus:ring-coral/10 placeholder:text-text-muted placeholder:opacity-60 w-full"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border border-slate-light rounded-md px-4 py-3 text-base text-text-primary font-primary transition-all duration-200 focus:outline-none focus:border-coral focus:ring-4 focus:ring-coral/10 placeholder:text-text-muted placeholder:opacity-60 w-full"
                />
              </div>
              <div className="flex flex-col">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-transparent border border-slate-light rounded-md px-4 py-3 text-base text-text-primary font-primary transition-all duration-200 focus:outline-none focus:border-coral focus:ring-4 focus:ring-coral/10 placeholder:text-text-muted placeholder:opacity-60 resize-y min-h-[120px] leading-relaxed w-full"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="px-6 py-3 bg-gradient-to-r from-coral to-orange text-white font-semibold rounded-md transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-coral/30 w-full lg:w-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <footer className="border-t border-white/10 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 flex-wrap">
            <div className="text-base font-semibold text-text-primary">Luiz Henrique Salazar</div>
            <div className="text-sm text-text-muted">
              © {new Date().getFullYear()} All rights reserved.
            </div>
            <div className="flex gap-6 items-center">
              <a 
                href="mailto:luizhsalazar@gmail.com"
                className="text-text-secondary transition-all duration-200 hover:text-coral hover:-translate-y-0.5 flex items-center justify-center w-8 h-8" 
                aria-label="Email"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
              {/* <a 
                href="https://github.com/luizhsalazar" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary transition-all duration-200 hover:text-coral hover:-translate-y-0.5 flex items-center justify-center w-8 h-8" 
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                </svg>
              </a> */}
              <a 
                href="https://www.linkedin.com/in/luizhsalazar/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary transition-all duration-200 hover:text-coral hover:-translate-y-0.5 flex items-center justify-center w-8 h-8" 
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
