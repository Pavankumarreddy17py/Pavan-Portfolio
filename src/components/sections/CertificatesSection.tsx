import React from 'react';
import { ExternalLink } from 'lucide-react';
import { CERTIFICATES } from '../../data/portfolio';

const CertificatesSection: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Certificates & Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES.map((certificate) => (
            <div 
              key={certificate.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={certificate.imageUrl}
                  alt={`${certificate.title} Certificate`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {certificate.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {certificate.issuer}
                </p>
                
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                  Issued: {certificate.issueDate}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    ID: {certificate.credentialId}
                  </span>
                  
                  <a
                    href={certificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    Verify
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;