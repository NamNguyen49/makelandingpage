import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';
import { Textarea } from '../UI/Textarea';
import { 
  PageSection, 
  HeroContent, 
  FeaturesContent, 
  TestimonialsContent, 
  ContactContent,
  AboutContent,
  ServicesContent,
  TeamContent,
  PricingContent,
  BlogContent,
  GalleryContent
} from '../../types';

interface SectionEditorProps {
  section: PageSection;
  onUpdate: (section: PageSection) => void;
  onBack: () => void;
}

export const SectionEditor: React.FC<SectionEditorProps> = ({ section, onUpdate, onBack }) => {
  const [content, setContent] = useState(section.content);
  const [title, setTitle] = useState(section.title);

  useEffect(() => {
    setContent(section.content);
    setTitle(section.title);
  }, [section]);

  const handleSave = () => {
    onUpdate({ ...section, title, content });
    onBack();
  };

  const renderHeroEditor = (heroContent: HeroContent) => (
    <div className="space-y-4">
      <Input
        label="Hero Title"
        value={heroContent.title}
        onChange={(e) => setContent({ ...heroContent, title: e.target.value })}
      />
      <Input
        label="Subtitle"
        value={heroContent.subtitle}
        onChange={(e) => setContent({ ...heroContent, subtitle: e.target.value })}
      />
      <Input
        label="Button Text"
        value={heroContent.buttonText}
        onChange={(e) => setContent({ ...heroContent, buttonText: e.target.value })}
      />
      <Input
        label="Button URL"
        value={heroContent.buttonUrl}
        onChange={(e) => setContent({ ...heroContent, buttonUrl: e.target.value })}
      />
    </div>
  );

  const renderFeaturesEditor = (featuresContent: FeaturesContent) => (
    <div className="space-y-4">
      {featuresContent.features.map((feature, index) => (
        <div key={feature.id} className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium mb-3">Feature {index + 1}</h4>
          <Input
            label="Title"
            value={feature.title}
            onChange={(e) => {
              const newFeatures = [...featuresContent.features];
              newFeatures[index] = { ...feature, title: e.target.value };
              setContent({ ...featuresContent, features: newFeatures });
            }}
          />
          <Textarea
            label="Description"
            value={feature.description}
            onChange={(e) => {
              const newFeatures = [...featuresContent.features];
              newFeatures[index] = { ...feature, description: e.target.value };
              setContent({ ...featuresContent, features: newFeatures });
            }}
          />
          <Input
            label="Icon"
            value={feature.icon}
            onChange={(e) => {
              const newFeatures = [...featuresContent.features];
              newFeatures[index] = { ...feature, icon: e.target.value };
              setContent({ ...featuresContent, features: newFeatures });
            }}
          />
        </div>
      ))}
    </div>
  );

  const renderTestimonialsEditor = (testimonialsContent: TestimonialsContent) => (
    <div className="space-y-4">
      {testimonialsContent.testimonials.map((testimonial, index) => (
        <div key={testimonial.id} className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium mb-3">Testimonial {index + 1}</h4>
          <Input
            label="Name"
            value={testimonial.name}
            onChange={(e) => {
              const newTestimonials = [...testimonialsContent.testimonials];
              newTestimonials[index] = { ...testimonial, name: e.target.value };
              setContent({ ...testimonialsContent, testimonials: newTestimonials });
            }}
          />
          <Input
            label="Role"
            value={testimonial.role}
            onChange={(e) => {
              const newTestimonials = [...testimonialsContent.testimonials];
              newTestimonials[index] = { ...testimonial, role: e.target.value };
              setContent({ ...testimonialsContent, testimonials: newTestimonials });
            }}
          />
          <Textarea
            label="Content"
            value={testimonial.content}
            onChange={(e) => {
              const newTestimonials = [...testimonialsContent.testimonials];
              newTestimonials[index] = { ...testimonial, content: e.target.value };
              setContent({ ...testimonialsContent, testimonials: newTestimonials });
            }}
          />
        </div>
      ))}
    </div>
  );

  const renderAboutEditor = (aboutContent: AboutContent) => (
    <div className="space-y-4">
      <Input
        label="Title"
        value={aboutContent.title}
        onChange={(e) => setContent({ ...aboutContent, title: e.target.value })}
      />
      <Input
        label="Subtitle"
        value={aboutContent.subtitle}
        onChange={(e) => setContent({ ...aboutContent, subtitle: e.target.value })}
      />
      <Textarea
        label="Description"
        value={aboutContent.description}
        onChange={(e) => setContent({ ...aboutContent, description: e.target.value })}
      />
      <Input
        label="Image URL"
        value={aboutContent.image || ''}
        onChange={(e) => setContent({ ...aboutContent, image: e.target.value })}
      />
      {aboutContent.stats.map((stat, index) => (
        <div key={stat.id} className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium mb-3">Stat {index + 1}</h4>
          <Input
            label="Number"
            value={stat.number}
            onChange={(e) => {
              const newStats = [...aboutContent.stats];
              newStats[index] = { ...stat, number: e.target.value };
              setContent({ ...aboutContent, stats: newStats });
            }}
          />
          <Input
            label="Label"
            value={stat.label}
            onChange={(e) => {
              const newStats = [...aboutContent.stats];
              newStats[index] = { ...stat, label: e.target.value };
              setContent({ ...aboutContent, stats: newStats });
            }}
          />
        </div>
      ))}
    </div>
  );

  const renderServicesEditor = (servicesContent: ServicesContent) => (
    <div className="space-y-4">
      <Input
        label="Title"
        value={servicesContent.title}
        onChange={(e) => setContent({ ...servicesContent, title: e.target.value })}
      />
      <Input
        label="Subtitle"
        value={servicesContent.subtitle}
        onChange={(e) => setContent({ ...servicesContent, subtitle: e.target.value })}
      />
      {servicesContent.services.map((service, index) => (
        <div key={service.id} className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium mb-3">Service {index + 1}</h4>
          <Input
            label="Title"
            value={service.title}
            onChange={(e) => {
              const newServices = [...servicesContent.services];
              newServices[index] = { ...service, title: e.target.value };
              setContent({ ...servicesContent, services: newServices });
            }}
          />
          <Textarea
            label="Description"
            value={service.description}
            onChange={(e) => {
              const newServices = [...servicesContent.services];
              newServices[index] = { ...service, description: e.target.value };
              setContent({ ...servicesContent, services: newServices });
            }}
          />
          <Input
            label="Icon"
            value={service.icon}
            onChange={(e) => {
              const newServices = [...servicesContent.services];
              newServices[index] = { ...service, icon: e.target.value };
              setContent({ ...servicesContent, services: newServices });
            }}
          />
          <Input
            label="Price (optional)"
            value={service.price || ''}
            onChange={(e) => {
              const newServices = [...servicesContent.services];
              newServices[index] = { ...service, price: e.target.value };
              setContent({ ...servicesContent, services: newServices });
            }}
          />
        </div>
      ))}
    </div>
  );

  const renderContactEditor = (contactContent: ContactContent) => (
    <div className="space-y-4">
      <Input
        label="Title"
        value={contactContent.title}
        onChange={(e) => setContent({ ...contactContent, title: e.target.value })}
      />
      <Input
        label="Subtitle"
        value={contactContent.subtitle}
        onChange={(e) => setContent({ ...contactContent, subtitle: e.target.value })}
      />
      <Input
        label="Email"
        value={contactContent.email}
        onChange={(e) => setContent({ ...contactContent, email: e.target.value })}
      />
      <Input
        label="Phone"
        value={contactContent.phone}
        onChange={(e) => setContent({ ...contactContent, phone: e.target.value })}
      />
      <Input
        label="Address"
        value={contactContent.address}
        onChange={(e) => setContent({ ...contactContent, address: e.target.value })}
      />
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h3 className="font-medium capitalize">Edit {section.type}</h3>
      </div>

      <Input
        label="Section Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {section.type === 'hero' && renderHeroEditor(content as HeroContent)}
      {section.type === 'features' && renderFeaturesEditor(content as FeaturesContent)}
      {section.type === 'about' && renderAboutEditor(content as AboutContent)}
      {section.type === 'services' && renderServicesEditor(content as ServicesContent)}
      {section.type === 'testimonials' && renderTestimonialsEditor(content as TestimonialsContent)}
      {section.type === 'contact' && renderContactEditor(content as ContactContent)}

      <div className="pt-4 border-t">
        <Button onClick={handleSave} className="w-full">
          Save Changes
        </Button>
      </div>
    </div>
  );
};