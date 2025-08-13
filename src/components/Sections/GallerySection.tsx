import React from 'react';
import { GalleryContent } from '../../types';

interface GallerySectionProps {
  content: GalleryContent;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ content }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.title}</h2>
          <p className="text-xl text-gray-600">{content.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.images.map((image, index) => (
            <div 
              key={image.id} 
              className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow ${
                index % 3 === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-blue-100 to-purple-100">
                {image.url ? (
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <div className="w-full h-64 flex items-center justify-center">
                    <span className="text-gray-500">{image.title}</span>
                  </div>
                )}
              </div>
              
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold mb-1">{image.title}</h3>
                  {image.description && (
                    <p className="text-sm text-gray-200">{image.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};