import React from 'react';
import { Star, Zap, Shield, Heart, Settings, Users } from 'lucide-react';
import { ServicesContent } from '../../types';

interface ServicesSectionProps {
  content: ServicesContent;
}

const iconMap = {
  star: Star,
  zap: Zap,
  shield: Shield,
  heart: Heart,
  settings: Settings,
  users: Users,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ content }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.title}</h2>
          <p className="text-xl text-gray-600">{content.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Star;
            return (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {service.price && (
                  <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};