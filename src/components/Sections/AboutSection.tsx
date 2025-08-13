import React from 'react';
import { AboutContent } from '../../types';

interface AboutSectionProps {
  content: AboutContent;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.title}</h2>
            <p className="text-xl text-gray-600 mb-6">{content.subtitle}</p>
            <p className="text-gray-600 mb-8 leading-relaxed">{content.description}</p>
            
            <div className="grid grid-cols-3 gap-6">
              {content.stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:pl-8">
            {content.image ? (
              <img 
                src={content.image} 
                alt={content.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            ) : (
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-gray-500">About Image</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};