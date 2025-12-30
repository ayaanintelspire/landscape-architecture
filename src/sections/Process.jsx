import React from 'react';

const Process = ({ data }) => {
  if (!data) return null;

  return (
    <section id="process" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="text-nexus-orange font-black uppercase tracking-[0.4em] text-xs mb-4">
            The Journey
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-nexus-navy tracking-tight">
            Our Proven Process
          </h2>
          <div className="w-20 h-1.5 bg-nexus-red mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative">
          
          {/* Nexus Connector Line (Desktop Only) - Gradient from Orange to Red */}
          <div className="hidden lg:block absolute top-14 left-0 w-full h-1 bg-gradient-to-r from-nexus-orange via-nexus-red to-nexus-navy/10 -z-0 opacity-20"></div>

          {data.map((item) => (
            <div key={item.id} className="relative z-10 text-center group">
              
              {/* Step Number - "Nexus Square" Style */}
              <div className="w-28 h-28 bg-white border-2 border-nexus-steel/10 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-nexus-navy/5 group-hover:border-nexus-orange group-hover:shadow-nexus-orange/20 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-3">
                <div className="relative">
                  <span className="text-4xl font-black text-nexus-navy group-hover:text-nexus-orange transition-colors">
                    {item.step}
                  </span>
                  {/* Decorative Dot */}
                  <div className="absolute -top-1 -right-2 w-3 h-3 bg-nexus-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-black text-nexus-navy mb-4 uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed px-2 text-lg font-medium italic">
                {item.desc}
              </p>

              {/* Mobile Arrow (Down) */}
              <div className="lg:hidden mt-8 text-nexus-orange animate-bounce">
                ↓
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;