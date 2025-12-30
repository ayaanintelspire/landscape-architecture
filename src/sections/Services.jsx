import React from 'react';

const Services = ({ data }) => {
  if (!data) return null;

  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-nexus-navy mb-6 tracking-tight">
            Our Expertise
          </h2>
          <p className="text-nexus-steel max-w-2xl mx-auto text-xl font-medium">
            Mastering the art of tropical landscaping through specialized services tailored for Hawaii's unique environment.
          </p>
        </div>

        {/* 6-Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((service) => (
            <div 
              key={service.id} 
              className="group p-10 rounded-[2rem] border border-nexus-steel/10 bg-white hover:shadow-2xl hover:shadow-nexus-orange/10 hover:border-nexus-peach/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Subtle Background Pattern (Optional Nexus Touch) */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-nexus-orange/5 rounded-full blur-3xl group-hover:bg-nexus-orange/10 transition-colors"></div>

              {/* Icon Box in Peach/Orange */}
              <div className="w-20 h-20 bg-gradient-to-br from-nexus-peach/20 to-nexus-orange/10 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-black text-nexus-navy mb-4 group-hover:text-nexus-orange transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                {service.desc || 'Quality service description goes here...'}
              </p>

              {/* Minimal Link Indicator */}
              <div className="flex items-center gap-2 text-nexus-orange font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                Details <span>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;