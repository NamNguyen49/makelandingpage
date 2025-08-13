import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { TeamContent } from '../../types';

interface TeamSectionProps {
  content: TeamContent;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ content }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.title}</h2>
          <p className="text-xl text-gray-600">{content.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.members.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500">{member.name}</span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                
                {member.social && (
                  <div className="flex space-x-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-gray-400 hover:text-blue-600">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.email && (
                      <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-blue-600">
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};