import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactContent } from '../../types';

interface ContactSectionProps {
  content: ContactContent;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ content }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
          <p className="text-xl text-gray-600">{content.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-600">{content.email}</p>
          </div>
          <div className="text-center">
            <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">{content.phone}</p>
          </div>
          <div className="text-center">
            <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-gray-600">{content.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
};