import React, { useState, useEffect } from 'react';

const Hero = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Safety Check: Get the images array, or a fallback if it's missing
  const sliderImages = data?.images || [];

  useEffect(() => {
    // Only start timer if we have more than 1 image
    if (sliderImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 6000); // 6 seconds

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  // If no images found at all, show a dark background
  if (sliderImages.length === 0) return <div className="h-screen bg-nexus-navy" />;

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* Background Slider */}
      <div className="absolute inset-0">
        {sliderImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
          {data.heading}
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-10 font-medium max-w-2xl mx-auto italic">
          {data.subheading}
        </p>
       
        <button className="bg-nexus-orange hover:bg-nexus-red text-white px-12 py-5 rounded-full font-black text-lg transition-all transform hover:scale-110 shadow-2xl shadow-nexus-orange/40 uppercase tracking-widest">
          {data.buttonText}
        </button>

        {/* Navigation Dots */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex gap-3">
          {sliderImages.map((_, index) => (
            <div 
              key={index}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                index === currentIndex ? 'w-8 bg-nexus-orange' : 'w-2 bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;