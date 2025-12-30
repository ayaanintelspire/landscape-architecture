import HeroImg1 from "../assets/pictures/Hompage.jpg";
import HeroImg2 from "../assets/pictures/AboutUs.jpg"; 
import HeroImg3 from "../assets/pictures/landscape1.jpg";
import HeroImg4 from "../assets/pictures/landscape2.jpg";
import HeroImg5 from "../assets/pictures/landscape3.jpg";

export const homeData = {
  // SECTION 1: HERO
  hero: {
    heading: "Crafting Living Architecture",
    subheading: "Seamlessly blending modern structure with the natural world since 1975.",
    images: [HeroImg3, HeroImg4, HeroImg5],
    buttonText: "Start Your Project",
  },

  // SECTION 2: ABOUT
  about: {
    heading: "Nexus Design Studio",
    description: "At Nexus, we bridge the gap between structural integrity and organic beauty. We specialize in high-end landscape architecture that treats every site as a unique canvas. Our family-led firm combines four decades of engineering expertise with a passion for sustainable, avant-garde outdoor living.",
    imagePreview: "https://plus.unsplash.com/premium_photo-1661906152280-462ebef433ac?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  // SECTION 3: TESTIMONIALS (Elevated Language)
  testimonials: [
    { 
      id: 1, 
      text: "Nexus transformed our property into a structural masterpiece. Their ability to integrate the home's architecture with the landscape is unparalleled.", 
      author: "Adrian Sterling" 
    },
    { 
      id: 2, 
      text: "Professionalism at its peak. The 3D master planning allowed us to see our future estate with perfect clarity before a single stone was laid.", 
      author: "Elena Rossi" 
    },
    { 
      id: 3, 
      text: "They didn't just build a yard; they engineered an environment. Their hydraulic and lighting design is truly world-class.", 
      author: "Marcus Thorne" 
    },
  ],

  // SECTION 4: SERVICES (Architectural Focus)
  services: [
    {
      id: 1,
      title: "Site Discovery",
      icon: "📐",
      desc: "Holistic analysis of topography, soil mechanics, and environmental impact.",
    },
    {
      id: 2,
      title: "Hardscape Engineering",
      icon: "🏗️",
      desc: "Structural masonry, custom paving, and precision-built retaining systems.",
    },
    {
      id: 3,
      title: "Master Planning",
      icon: "🖋️",
      desc: "Comprehensive architectural blueprints and immersive 3D project renderings.",
    },
    {
      id: 4,
      title: "Estate Stewardship",
      icon: "🏛️",
      desc: "White-glove management and evolution of luxury architectural landscapes.",
    },
    {
      id: 5,
      title: "Hydraulic Design",
      icon: "💧",
      desc: "Advanced irrigation engineering and water conservation systems.",
    },
    {
      id: 6,
      title: "Atmospheric Water",
      icon: "✨",
      desc: "Architectural waterfalls, infinity pools, and custom aquatic features.",
    },
  ],

  // SECTION 5: PORTFOLIO
  portfolio: [
    {
      id: 1,
      title: "The Skyline Estate",
      imageUrl: "https://images.unsplash.com/photo-1643643704183-f7a8ede67efa?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Nexus Commercial Plaza",
      imageUrl: "https://plus.unsplash.com/premium_photo-1733317319340-780116c22c75?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Horizon Infinity Pool",
      imageUrl: "https://images.unsplash.com/photo-1656801027928-f83fe473ae0a?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Coastal Conservation Site",
      imageUrl: "https://images.unsplash.com/photo-1660441993225-abcbffb0bea5?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],

  // SECTION 6: THE PROCESS (More formal/Business-focused)
  process: [
    { id: 1, step: '01', title: 'Site Discovery', desc: 'We analyze the raw terrain and environmental factors to define the project scope.' },
    { id: 2, step: '02', title: 'Conceptual Design', desc: 'We draft 3D architectural master plans that balance structure with nature.' },
    { id: 3, step: '03', title: 'Project Execution', desc: 'Our engineering crew builds out the design with absolute precision and premium materials.' },
    { id: 4, step: '04', title: 'Stewardship', desc: 'Handover and long-term ecosystem management to ensure the project matures beautifully.' },
  ],

  // SECTION 7: FOOTER
  footer: {
    instagram: "https://instagram.com/nexus_architecture",
    facebook: "https://facebook.com/nexus_arch",
    twitter: "https://twitter.com/nexus_arch",
    youtube: "https://youtube.com/nexus_arch",
    contactEmail: "studio@nexus-arch.com",
    contactPhone: "(808) Nexus-Arch",
    officeAddress: "Nexus Studio, Island Way, HI 96815"
  }
};