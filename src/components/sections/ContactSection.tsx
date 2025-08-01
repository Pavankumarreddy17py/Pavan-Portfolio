import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_DATA } from '../../data/portfolio';

const ContactSection: React.FC = () => {
  const handleEmailClick = () => {
    const subject = encodeURIComponent('Hello from your portfolio website');
    const body = encodeURIComponent('Hi PavanKumar,\n\nI visited your portfolio and would like to get in touch.\n\nBest regards,');
    window.location.href = `mailto:${CONTACT_DATA.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          {CONTACT_DATA.title}
        </h2>
        
        <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Ready to start a conversation? Click the button below to send me an email directly.
        </p>
        
        <div className="max-w-4xl mx-auto">
          {/* Main email CTA */}
          <div className="text-center mb-12">
            <button
              onClick={handleEmailClick}
              className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Mail size={28} className="mr-4 relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Send me an Email</span>
              
              {/* Animated background effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-400 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
            </button>
          </div>
          
          {/* Contact information cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Email</h3>
              <a
                href={`mailto:${CONTACT_DATA.email}`}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
              >
                {CONTACT_DATA.email}
              </a>
            </div>
            
            {/* <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-6">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Phone</h3>
              <a
                href={`tel:${CONTACT_DATA.phone.replace(/[^0-9+]/g, '')}`}
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                {CONTACT_DATA.phone}
              </a>
            </div> */} 
            
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Location</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {CONTACT_DATA.location}
              </p>
            </div>
          </div>
          
          {/* Call to action section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Let's Build Something Amazing Together</h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                I'm always excited to work on new projects and collaborate with talented individuals. 
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
              <button
                onClick={handleEmailClick}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Mail size={20} className="mr-2" />
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;