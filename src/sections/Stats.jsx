import React from 'react';

const Stats = () => {
  const stats = [
    { label: 'Years in Practice', value: '45+' },
    { label: 'Global Commissions', value: '850+' },
    { label: 'Design Awards', value: '18' },
    { label: 'Sq. Ft. Engineered', value: '2M+' },
  ];

  return (
    <section className="bg-nexus-navy py-20 relative overflow-hidden">
      {/* Subtle background decoration for an architectural feel */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-nexus-orange/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              {/* The Value in Nexus Orange */}
              <div className="text-5xl md:text-6xl font-black mb-3 text-nexus-orange tracking-tighter transition-transform group-hover:scale-110 duration-300">
                {stat.value}
              </div>
              
              {/* Small accent line */}
              <div className="w-8 h-1 bg-nexus-red mx-auto mb-4 rounded-full opacity-50 group-hover:w-12 group-hover:opacity-100 transition-all"></div>
              
              {/* The Label in Nexus Steel */}
              <div className="text-nexus-steel font-bold uppercase tracking-[0.2em] text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;