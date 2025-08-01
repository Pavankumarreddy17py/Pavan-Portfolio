

import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { HERO_DATA } from '../../data/portfolio';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-70"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">{HERO_DATA.name}</span>
          </h1>
          
          <h2 
            className={`text-2xl md:text-3xl font-medium mb-6 text-gray-700 dark:text-gray-300 transform transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {HERO_DATA.title}
          </h2>
          
          <p 
            className={`text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl transform transition-all duration-1000 delay-500 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {/* {HERO_DATA.description} */}
          </p>
          
          <div 
            className={`transform transition-all duration-1000 delay-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <a 
              href={HERO_DATA.ctaHref} 
              className="px-8 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors inline-block"
            >
              {HERO_DATA.ctaText}
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;