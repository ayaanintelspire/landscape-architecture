import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Small trigger for the glass effect
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-2xl shadow-nexus-navy/5 py-4 border-b border-nexus-steel/10' 
        : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Brand Logo */}
        <div className={`text-2xl font-black italic transition-all duration-300 tracking-tighter cursor-pointer ${
          isScrolled ? 'text-nexus-navy' : 'text-white'
        }`}>
          Nexus
          <span className="text-nexus-orange uppercase text-xs not-italic ml-1.5 tracking-[0.3em] font-black border-l-2 border-nexus-red/30 pl-2">
            Architecture
          </span>
        </div>

        {/* Navigation Links */}
        <div className={`hidden lg:flex gap-10 font-black uppercase text-[10px] tracking-[0.25em] transition-colors ${
          isScrolled ? 'text-nexus-navy/70' : 'text-white/80'
        }`}>
          <a href="#home" className="hover:text-nexus-orange transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nexus-orange transition-all group-hover:w-full"></span>
          </a>
          <a href="#about" className="hover:text-nexus-orange transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nexus-orange transition-all group-hover:w-full"></span>
          </a>
          <a href="#services" className="hover:text-nexus-orange transition-colors relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nexus-orange transition-all group-hover:w-full"></span>
          </a>
          <a href="#portfolio" className="hover:text-nexus-orange transition-colors relative group">
            Work
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nexus-orange transition-all group-hover:w-full"></span>
          </a>
          <a href="#process" className="hover:text-nexus-orange transition-colors relative group">
            Process
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nexus-orange transition-all group-hover:w-full"></span>
          </a>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <button className={`hidden sm:block px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-xl ${
            isScrolled 
              ? 'bg-nexus-navy text-white hover:bg-nexus-orange' 
              : 'bg-white text-nexus-navy hover:bg-nexus-orange hover:text-white'
          }`}>
            Contact Studio
          </button>
          
          {/* Mobile Menu Icon (Placeholder for functionality) */}
          <div className="lg:hidden flex flex-col gap-1.5 cursor-pointer p-2 group">
            <div className={`w-6 h-0.5 transition-colors ${isScrolled ? 'bg-nexus-navy' : 'bg-white'} group-hover:bg-nexus-orange`}></div>
            <div className={`w-6 h-0.5 transition-colors ${isScrolled ? 'bg-nexus-navy' : 'bg-white'} group-hover:bg-nexus-orange`}></div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;