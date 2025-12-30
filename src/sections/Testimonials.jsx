import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = ({ data }) => {
  if (!data) return null;

  return (
    <section id="testimonials" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading Area */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-nexus-navy mb-6 tracking-tight">
            What Our Clients Say
          </h2>
          {/* Accent Line in Nexus Orange */}
          <div className="w-24 h-2 bg-nexus-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data?.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white p-12 rounded-[2.5rem] border border-nexus-steel/10 shadow-xl shadow-nexus-navy/5 relative hover:shadow-2xl hover:shadow-nexus-orange/10 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Quote Icon in Nexus Peach/Orange transparent */}
              <Quote className="absolute top-10 right-10 text-nexus-orange/10 w-16 h-16 group-hover:text-nexus-orange/20 transition-colors duration-500" />
              
              <div className="relative z-10">
                <p className="text-nexus-navy/70 text-xl leading-relaxed mb-10 italic font-medium">
                  "{item.text || 'The transformation was incredible...'}"
                </p>
                
                <div className="flex items-center gap-5">
                  {/* Author Box in Nexus Red */}
                  <div className="w-14 h-14 bg-nexus-red rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-nexus-red/20 transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    {item.author ? item.author.charAt(0) : '?'}
                  </div>
                  
                  <div>
                    <h4 className="font-black text-nexus-navy uppercase tracking-widest text-sm">
                      {item.author || 'Anonymous'}
                    </h4>
                    <div className="flex gap-1 mt-1">
                      {/* 5 Small Orange Dots for Rating */}
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-nexus-orange"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;