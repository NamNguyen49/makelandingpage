import React from 'react';
import { Check } from 'lucide-react';
import { PricingContent } from '../../types';

interface PricingSectionProps {
  content: PricingContent;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ content }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.title}</h2>
          <p className="text-xl text-gray-600">{content.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`bg-white rounded-lg shadow-md border-2 p-8 relative ${
                plan.popular ? 'border-blue-500' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  {plan.price}
                  <span className="text-lg text-gray-600 font-normal">/{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};