import React from 'react';

const About = ({ data }) => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image with Nexus Style Offset */}
        <div className="relative group">
          {/* We changed bg-indigo-100 to a muted Navy/Steel tone */}
          <div className="absolute -inset-4 bg-nexus-navy/5 rounded-3xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
          
          <img 
            src={data.imagePreview} 
            alt="About our gardens" 
            className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover border-b-8 border-nexus-orange"
          />

          {/* Decorative Badge */}
          <div className="absolute -bottom-6 -right-6 bg-nexus-navy text-white p-6 rounded-2xl hidden lg:block shadow-xl">
            <div className="text-3xl font-black text-nexus-orange">45+</div>
            <div className="text-xs uppercase tracking-tighter font-bold text-nexus-steel">Years of Excellence </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8">
          <div className="inline-block px-5 py-1.5 bg-nexus-orange/10 text-nexus-orange rounded-full text-xs font-black uppercase tracking-[0.2em]">
            Our Story
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-nexus-navy leading-[1.1]">
            {data.heading}
          </h2>

          <div className="relative">
            {/* We changed border-indigo-500 to nexus-red */}
            <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-nexus-red pl-6 py-2">
              {data.description}
            </p>
          </div>

          <p className="text-slate-500 leading-relaxed">
            We believe that every home deserves a masterpiece. Our approach combines the raw beauty of Hawaii's flora with the structured elegance of modern architecture.
          </p>

          <div className="pt-6">
            <button className="text-nexus-navy font-black flex items-center gap-3 group transition-all text-lg hover:text-nexus-orange">
              Learn more about our process 
              <span className="w-10 h-10 rounded-full bg-nexus-orange/10 flex items-center justify-center group-hover:bg-nexus-orange group-hover:text-white transition-all">
                →
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;