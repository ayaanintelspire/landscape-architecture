import React from 'react';

const Portfolio = ({ data }) => {
  if (!data) return null;

  return (
    <section id="portfolio" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Styled with Nexus Navy & Orange */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <div className="text-nexus-orange font-black uppercase tracking-[0.3em] text-xs mb-4">
              Our Gallery
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-nexus-navy leading-tight">
              Recent Work
            </h2>
            <p className="text-nexus-steel text-xl mt-4 font-medium">
              A showcase of luxury transformations across the islands.
            </p>
          </div>
          
          <button className="bg-nexus-navy text-white px-10 py-4 rounded-full font-black hover:bg-nexus-orange transition-all duration-300 shadow-xl shadow-nexus-navy/20 transform hover:-translate-y-1">
            View All Projects
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.map((project) => (
            <div 
              key={project.id} 
              className="group relative h-[500px] overflow-hidden rounded-[2.5rem] bg-nexus-navy shadow-2xl"
            >
              {/* Image with zoom and slight darken */}
              <img 
                src={project.imageUrl || 'https://via.placeholder.com/800x600'} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              
              {/* Nexus Sunset Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-nexus-navy via-nexus-navy/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Content on Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-nexus-peach font-black uppercase tracking-widest text-xs mb-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  Featured Project
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                  {project.title}
                </h3>
                
                {/* Button-style link */}
                <div className="flex items-center gap-4 text-white font-bold group/link">
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover/link:bg-nexus-orange group-hover/link:border-nexus-orange transition-all">
                    <span className="text-xl">→</span>
                  </div>
                  <span className="uppercase tracking-widest text-xs">View Case Study</span>
                </div>
              </div>

              {/* Top-right Tag - Dynamic from homeData */}
          <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.25em]">
          {project.tag}
         </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;