import React from 'react';
import { HeroContent } from '../../types';

interface HeroSectionProps {
  content: HeroContent;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {content.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            {content.subtitle}
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200">
            {content.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};