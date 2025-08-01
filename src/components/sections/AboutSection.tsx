import React from 'react';
import { ABOUT_DATA } from '../../data/portfolio';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          {ABOUT_DATA.title}
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/5 w-full flex justify-center">
            <div className="relative group">
              {/* Animated background rings */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 opacity-20 animate-spin-slow group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 opacity-15 animate-pulse group-hover:opacity-25 transition-opacity duration-500"></div>
              <div className="absolute -inset-4 rounded-full bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-500"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500 border-4 border-white dark:border-gray-800">
                <img 
                  src={ABOUT_DATA.imageUrl} 
                  alt="Profile" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-40"></div>
            </div>
          </div>
          
          <div className="lg:w-3/5 w-full">
            {ABOUT_DATA.description.split('\n\n').map((paragraph, index) => (
              <p 
                key={index}
                className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;