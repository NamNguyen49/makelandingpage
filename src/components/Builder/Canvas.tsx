import React from 'react';
import { PageSection, MenuItem, BrandSettings } from '../../types';
import { HeroSection } from '../Sections/HeroSection';
import { FeaturesSection } from '../Sections/FeaturesSection';
import { AboutSection } from '../Sections/AboutSection';
import { ServicesSection } from '../Sections/ServicesSection';
import { TeamSection } from '../Sections/TeamSection';
import { PricingSection } from '../Sections/PricingSection';
import { TestimonialsSection } from '../Sections/TestimonialsSection';
import { BlogSection } from '../Sections/BlogSection';
import { GallerySection } from '../Sections/GallerySection';
import { ContactSection } from '../Sections/ContactSection';

interface CanvasProps {
  sections: PageSection[];
  menuItems: MenuItem[];
  brandSettings: BrandSettings;
  selectedSection: PageSection | null;
  onSelectSection: (section: PageSection) => void;
}

export const Canvas: React.FC<CanvasProps> = ({
  sections,
  menuItems,
  brandSettings,
  selectedSection,
  onSelectSection,
}) => {
  const renderSection = (section: PageSection) => {
    const isSelected = selectedSection?.id === section.id;
    const sectionClass = `relative ${isSelected ? 'ring-2 ring-blue-500' : ''}`;

    const sectionContent = (() => {
      switch (section.type) {
        case 'hero':
          return <HeroSection content={section.content} />;
        case 'features':
          return <FeaturesSection content={section.content} />;
        case 'about':
          return <AboutSection content={section.content} />;
        case 'services':
          return <ServicesSection content={section.content} />;
        case 'team':
          return <TeamSection content={section.content} />;
        case 'pricing':
          return <PricingSection content={section.content} />;
        case 'testimonials':
          return <TestimonialsSection content={section.content} />;
        case 'blog':
          return <BlogSection content={section.content} />;
        case 'gallery':
          return <GallerySection content={section.content} />;
        case 'contact':
          return <ContactSection content={section.content} />;
        default:
          return null;
      }
    })();

    return (
      <div
        key={section.id}
        className={sectionClass}
        onClick={() => onSelectSection(section)}
      >
        {isSelected && (
          <div className="absolute top-0 left-0 bg-blue-500 text-white px-2 py-1 text-xs font-medium z-10">
            {section.type.toUpperCase()}
          </div>
        )}
        {sectionContent}
      </div>
    );
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      <div className="min-h-screen">
        {/* Navigation Header */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex items-center space-x-2">
                  {brandSettings.logo ? (
                    <img 
                      src={brandSettings.logo} 
                      alt={brandSettings.name}
                      className="h-8 object-contain"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                      <span className="text-white font-bold text-sm">
                        {brandSettings.name.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div>
                    <span className="text-xl font-bold text-gray-900">{brandSettings.name}</span>
                    {brandSettings.tagline && (
                      <p className="text-xs text-gray-500">{brandSettings.tagline}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex space-x-8">
                {menuItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Page Sections */}
        <main>
          {sections.length > 0 ? (
            sections.map(renderSection)
          ) : (
            <div className="flex items-center justify-center min-h-96">
              <div className="text-center">
                <p className="text-gray-500 text-lg">No sections added yet</p>
                <p className="text-gray-400 text-sm">Add sections from the sidebar to get started</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};