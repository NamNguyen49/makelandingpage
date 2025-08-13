import React from 'react';
import { Star, Zap, Shield, Heart } from 'lucide-react';
import { FeaturesContent } from '../../types';

interface FeaturesSectionProps {
  content: FeaturesContent;
}

const iconMap = {
  star: Star,
  zap: Zap,
  shield: Shield,
  heart: Heart,
};

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ content }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.features.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Star;
            return (
              <div key={feature.id} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};