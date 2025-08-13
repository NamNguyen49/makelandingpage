import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';
import { BlogContent } from '../../types';

interface BlogSectionProps {
  content: BlogContent;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ content }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.title}</h2>
          <p className="text-xl text-gray-600">{content.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                {post.image ? (
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500">Blog Image</span>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  <Tag className="w-4 h-4 mr-1 text-blue-600" />
                  <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                
                <button className="mt-4 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};