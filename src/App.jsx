import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Testimonials from './sections/Testimonials'; // 1. Don't forget this import!
import { homeData } from './data/homeData';
import Services from './sections/Services';
import { Home } from 'lucide-react';
import Portfolio from './sections/Portfolio';
import Process from './sections/Process';
import Footer from './sections/Footer';
import Navbar from './Components/Navbar';
import Stats from './sections/Stats';

function App() {
  return (
    <main className="min-h-screen">
      <Hero data={homeData.hero} />
      <Navbar />
      <About data={homeData.about} />
      <Stats/>
      
      {/* 2. Pass the testimonials array to the component */}
      {/* We use homeData.testimonials && ... to ensure it doesn't crash if data is missing */}
      {homeData.testimonials && <Testimonials data={homeData.testimonials} />}
      {homeData.services && <Services data={homeData.services} />}
      {homeData.portfolio && <Portfolio data={homeData.portfolio} />}
      {homeData.process && <Process data={homeData.process} />}
      

      <Footer data={homeData.footer} />
      
    </main>
  );
}

export default App;