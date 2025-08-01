import React from 'react';
import { EXPERIENCES } from '../../data/portfolio';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Internship Experience
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900/50"></div>
            
            {/* Experience items */}
            {EXPERIENCES.map((experience, index) => (
              <div 
                key={experience.id} 
                className={`mb-12 relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 z-10"></div>
                
                {/* Content */}
                <div className="md:w-1/2 pl-6 md:pl-0 md:pr-10 ml-6 md:ml-0">
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105">
                    <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                      {experience.role}
                    </h3>
                    
                    <h4 className="text-md font-medium mb-2 text-blue-600 dark:text-blue-400">
                      {experience.company}
                    </h4>
                    
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {experience.period}
                    </p>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;