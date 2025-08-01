import React, { useState } from 'react';
import { SKILLS } from '../../data/portfolio';

type SkillCategory = 'all' | 'frontend' | 'backend' | "databases"|"API" |"data Visualization & Analysis"| 'ai & Machine Learning' | 'data analyst' |'tools';

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  
  const categories: { value: SkillCategory; label: string }[] = [
    { value: 'all', label: 'All Skills' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'databases', label: 'Databases' },
    { value: 'API', label: 'APIs' },
    { value: 'data Visualization & Analysis', label: 'Data Visualization & Analysis' },
    // { value: 'visualization', label: 'Visualization' },
    { value: 'ai & Machine Learning', label: 'AI & Machine Learning' },
    { value: 'data analyst', label: 'Data Analyst' },
    { value: 'tools', label: 'Frameworks & Tools' },
    
  ];
  
  const filteredSkills =
    activeCategory === 'all'
      ? SKILLS
      : SKILLS.filter((skill) =>
          Array.isArray(skill.category)
            ? skill.category.includes(activeCategory)
            : skill.category === activeCategory
        );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          My Skills
        </h2>
        
        {/* Category filters */}
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.name}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transition-transform hover:scale-105 duration-300"
            >
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                {skill.name}
              </h3>
              
              <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              <p className="mt-2 text-right text-sm text-gray-600 dark:text-gray-400">
                {skill.level}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;