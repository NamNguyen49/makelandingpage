import React, { useState, useEffect } from 'react';
import { TopNavigation } from './TopNavigation';
import { Sidebar } from './Sidebar';
import { Canvas } from './Canvas';
import { useApi } from '../../hooks/useApi';
import { LandingPage, PageSection, MenuItem, BrandSettings } from '../../types';

const defaultPage: LandingPage = {
  id: 'default',
  title: 'My Landing Page',
  brandSettings: {
    name: 'N&Q',
    tagline: 'Landing Page Builder',
  },
  menuItems: [
    { id: '1', title: 'Home', url: '#', order: 0 },
    { id: '2', title: 'Features', url: '#features', order: 1 },
    { id: '3', title: 'About', url: '#about', order: 2 },
    { id: '4', title: 'Contact', url: '#contact', order: 3 },
  ],
  sections: [],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const createDefaultContent = (type: PageSection['type']) => {
  switch (type) {
    case 'hero':
      return {
        title: 'Welcome to Our Amazing Product',
        subtitle: 'Transform your business with our innovative solution',
        buttonText: 'Get Started',
        buttonUrl: '#',
      };
    case 'features':
      return {
        features: [
          {
            id: '1',
            title: 'Fast & Reliable',
            description: 'Lightning-fast performance you can count on',
            icon: 'zap',
          },
          {
            id: '2',
            title: 'Secure',
            description: 'Bank-level security to protect your data',
            icon: 'shield',
          },
          {
            id: '3',
            title: 'Easy to Use',
            description: 'Intuitive interface that anyone can master',
            icon: 'heart',
          },
        ],
      };
    case 'about':
      return {
        title: 'About Our Company',
        subtitle: 'We are passionate about creating amazing experiences',
        description: 'Our team has been working tirelessly to bring you the best products and services. We believe in innovation, quality, and customer satisfaction.',
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
        stats: [
          { id: '1', number: '100+', label: 'Happy Clients' },
          { id: '2', number: '5+', label: 'Years Experience' },
          { id: '3', number: '50+', label: 'Projects Done' },
        ],
      };
    case 'services':
      return {
        title: 'Our Services',
        subtitle: 'We offer a wide range of professional services',
        services: [
          {
            id: '1',
            title: 'Web Development',
            description: 'Custom websites and web applications',
            icon: 'zap',
            price: '$999',
          },
          {
            id: '2',
            title: 'Mobile Apps',
            description: 'iOS and Android mobile applications',
            icon: 'settings',
            price: '$1,499',
          },
          {
            id: '3',
            title: 'Consulting',
            description: 'Strategic technology consulting',
            icon: 'users',
            price: '$199/hr',
          },
        ],
      };
    case 'team':
      return {
        title: 'Meet Our Team',
        subtitle: 'The talented people behind our success',
        members: [
          {
            id: '1',
            name: 'John Smith',
            role: 'CEO & Founder',
            bio: 'Passionate entrepreneur with 10+ years of experience',
            image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
            social: {
              linkedin: '#',
              twitter: '#',
              email: 'john@example.com',
            },
          },
          {
            id: '2',
            name: 'Sarah Johnson',
            role: 'CTO',
            bio: 'Tech leader with expertise in modern web technologies',
            image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
            social: {
              linkedin: '#',
              email: 'sarah@example.com',
            },
          },
        ],
      };
    case 'pricing':
      return {
        title: 'Choose Your Plan',
        subtitle: 'Flexible pricing options for every need',
        plans: [
          {
            id: '1',
            name: 'Basic',
            price: '$29',
            period: 'month',
            features: ['5 Projects', 'Basic Support', '10GB Storage'],
            buttonText: 'Get Started',
          },
          {
            id: '2',
            name: 'Pro',
            price: '$59',
            period: 'month',
            features: ['Unlimited Projects', 'Priority Support', '100GB Storage', 'Advanced Analytics'],
            popular: true,
            buttonText: 'Choose Pro',
          },
          {
            id: '3',
            name: 'Enterprise',
            price: '$99',
            period: 'month',
            features: ['Everything in Pro', 'Custom Integrations', 'Dedicated Support', 'Unlimited Storage'],
            buttonText: 'Contact Sales',
          },
        ],
      };
    case 'testimonials':
      return {
        testimonials: [
          {
            id: '1',
            name: 'John Smith',
            role: 'CEO, TechCorp',
            content: 'This product has transformed our business operations completely.',
          },
          {
            id: '2',
            name: 'Sarah Johnson',
            role: 'Marketing Director',
            content: 'The best investment we\'ve made for our company this year.',
          },
        ],
      };
    case 'blog':
      return {
        title: 'Latest News & Updates',
        subtitle: 'Stay updated with our latest articles and insights',
        posts: [
          {
            id: '1',
            title: 'How to Build Better Landing Pages',
            excerpt: 'Learn the best practices for creating high-converting landing pages that drive results.',
            author: 'John Doe',
            date: '2024-01-15',
            category: 'Design',
            image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
          },
          {
            id: '2',
            title: 'The Future of Web Development',
            excerpt: 'Exploring upcoming trends and technologies that will shape the web development landscape.',
            author: 'Jane Smith',
            date: '2024-01-10',
            category: 'Technology',
            image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
          },
        ],
      };
    case 'gallery':
      return {
        title: 'Our Work Gallery',
        subtitle: 'Take a look at some of our recent projects',
        images: [
          {
            id: '1',
            url: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Project Alpha',
            description: 'Modern web application design',
          },
          {
            id: '2',
            url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Project Beta',
            description: 'Mobile app interface',
          },
          {
            id: '3',
            url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Project Gamma',
            description: 'E-commerce platform',
          },
        ],
      };
    case 'contact':
      return {
        title: 'Get in Touch',
        subtitle: 'We\'d love to hear from you',
        email: 'hello@example.com',
        phone: '(555) 123-4567',
        address: '123 Business St, City, State 12345',
      };
    default:
      return {};
  }
};

export const PageBuilder: React.FC = () => {
  const [page, setPage] = useState<LandingPage>(defaultPage);
  const [selectedSection, setSelectedSection] = useState<PageSection | null>(null);
  const { updateLandingPage, loading } = useApi();

  const handleSave = async () => {
    try {
      const updatedPage = await updateLandingPage(page);
      setPage(updatedPage);
    } catch (error) {
      console.error('Failed to save page:', error);
    }
  };

  const handlePreview = () => {
    window.open('/preview', '_blank');
  };

  const handleAddSection = (type: PageSection['type']) => {
    const newSection: PageSection = {
      id: Date.now().toString(),
      type,
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} Section`,
      content: createDefaultContent(type),
      order: page.sections.length,
    };

    setPage({
      ...page,
      sections: [...page.sections, newSection],
    });
  };

  const handleUpdateSection = (updatedSection: PageSection) => {
    setPage({
      ...page,
      sections: page.sections.map((section) =>
        section.id === updatedSection.id ? updatedSection : section
      ),
    });
  };

  const handleDeleteSection = (sectionId: string) => {
    setPage({
      ...page,
      sections: page.sections.filter((section) => section.id !== sectionId),
    });
    if (selectedSection?.id === sectionId) {
      setSelectedSection(null);
    }
  };

  const handleUpdateMenuItem = (updatedMenuItem: MenuItem) => {
    setPage({
      ...page,
      menuItems: page.menuItems.map((item) =>
        item.id === updatedMenuItem.id ? updatedMenuItem : item
      ),
    });
  };

  const handleDeleteMenuItem = (menuItemId: string) => {
    setPage({
      ...page,
      menuItems: page.menuItems.filter((item) => item.id !== menuItemId),
    });
  };

  const handleAddMenuItem = () => {
    const newMenuItem: MenuItem = {
      id: Date.now().toString(),
      title: 'New Item',
      url: '#',
      order: page.menuItems.length,
    };

    setPage({
      ...page,
      menuItems: [...page.menuItems, newMenuItem],
    });
  };

  const handleUpdateBrandSettings = (brandSettings: BrandSettings) => {
    setPage({
      ...page,
      brandSettings,
    });
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <TopNavigation 
        onSave={handleSave} 
        onPreview={handlePreview}
        saving={loading}
      />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar
          sections={page.sections}
          menuItems={page.menuItems}
          brandSettings={page.brandSettings}
          selectedSection={selectedSection}
          onSelectSection={setSelectedSection}
          onUpdateSection={handleUpdateSection}
          onDeleteSection={handleDeleteSection}
          onAddSection={handleAddSection}
          onUpdateMenuItem={handleUpdateMenuItem}
          onDeleteMenuItem={handleDeleteMenuItem}
          onAddMenuItem={handleAddMenuItem}
          onUpdateBrandSettings={handleUpdateBrandSettings}
        />
        
        <Canvas
          sections={page.sections}
          menuItems={page.menuItems}
          brandSettings={page.brandSettings}
          selectedSection={selectedSection}
          onSelectSection={setSelectedSection}
        />
      </div>
    </div>
  );
};