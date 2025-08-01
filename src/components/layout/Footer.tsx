import React from 'react';
import { SOCIAL_LINKS } from '../../data/portfolio';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github size={18} />;
      case 'Linkedin':
        return <Linkedin size={18} />;
      case 'Twitter':
        return <Twitter size={18} />;
      case 'Mail':
        return <Mail size={18} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-700 dark:text-gray-300">
              © {new Date().getFullYear()} PavanKumar Reddy. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label={link.platform}
              >
                {getIconComponent(link.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;