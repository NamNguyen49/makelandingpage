import React, { useState } from 'react';
import { Plus, Settings, Menu, Trash2, GripVertical, Palette } from 'lucide-react';
import { Button } from '../UI/Button';
import { PageSection, MenuItem, BrandSettings } from '../../types';
import { SectionEditor } from './SectionEditor';
import { MenuEditor } from './MenuEditor';
import { BrandEditor } from './BrandEditor';

interface SidebarProps {
  sections: PageSection[];
  menuItems: MenuItem[];
  brandSettings: BrandSettings;
  selectedSection: PageSection | null;
  onSelectSection: (section: PageSection | null) => void;
  onUpdateSection: (section: PageSection) => void;
  onDeleteSection: (sectionId: string) => void;
  onAddSection: (type: PageSection['type']) => void;
  onUpdateMenuItem: (menuItem: MenuItem) => void;
  onDeleteMenuItem: (menuItemId: string) => void;
  onAddMenuItem: () => void;
  onUpdateBrandSettings: (brandSettings: BrandSettings) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  sections,
  menuItems,
  brandSettings,
  selectedSection,
  onSelectSection,
  onUpdateSection,
  onDeleteSection,
  onAddSection,
  onUpdateMenuItem,
  onDeleteMenuItem,
  onAddMenuItem,
  onUpdateBrandSettings,
}) => {
  const [activeTab, setActiveTab] = useState<'sections' | 'menu' | 'brand'>('sections');
  const [editingBrand, setEditingBrand] = useState(false);

  const sectionTypes = [
    { type: 'hero' as const, name: 'Hero' },
    { type: 'features' as const, name: 'Features' },
    { type: 'about' as const, name: 'About' },
    { type: 'services' as const, name: 'Services' },
    { type: 'team' as const, name: 'Team' },
    { type: 'pricing' as const, name: 'Pricing' },
    { type: 'testimonials' as const, name: 'Testimonials' },
    { type: 'blog' as const, name: 'Blog' },
    { type: 'gallery' as const, name: 'Gallery' },
    { type: 'contact' as const, name: 'Contact' },
  ];

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      <div className="border-b border-gray-200">
        <div className="flex">
          <button
            className={`flex-1 py-3 px-2 text-sm font-medium ${
              activeTab === 'sections'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('sections')}
          >
            Sections
          </button>
          <button
            className={`flex-1 py-3 px-2 text-sm font-medium ${
              activeTab === 'menu'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('menu')}
          >
            <Menu className="w-4 h-4 inline mr-1" />
            Menu
          </button>
          <button
            className={`flex-1 py-3 px-2 text-sm font-medium ${
              activeTab === 'brand'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('brand')}
          >
            <Palette className="w-4 h-4 inline mr-1" />
            Brand
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {activeTab === 'sections' && (
          <div className="p-4">
            {selectedSection ? (
              <SectionEditor
                section={selectedSection}
                onUpdate={onUpdateSection}
                onBack={() => onSelectSection(null)}
              />
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Add Section</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {sectionTypes.map((sectionType) => (
                      <Button
                        key={sectionType.type}
                        variant="secondary"
                        size="sm"
                        onClick={() => onAddSection(sectionType.type)}
                        className="justify-start"
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        {sectionType.name}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Current Sections</h3>
                  <div className="space-y-2">
                    {sections.map((section) => (
                      <div
                        key={section.id}
                        className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                        onClick={() => onSelectSection(section)}
                      >
                        <div className="flex items-center">
                          <GripVertical className="w-4 h-4 text-gray-400 mr-2" />
                          <div>
                            <p className="font-medium text-sm capitalize">{section.type}</p>
                            <p className="text-xs text-gray-500">{section.title}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectSection(section);
                            }}
                          >
                            <Settings className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              onDeleteSection(section.id);
                            }}
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {activeTab === 'menu' && (
          <MenuEditor
            menuItems={menuItems}
            onUpdate={onUpdateMenuItem}
            onDelete={onDeleteMenuItem}
            onAdd={onAddMenuItem}
          />
        )}

        {activeTab === 'brand' && (
          <div className="p-4">
            {editingBrand ? (
              <BrandEditor
                brandSettings={brandSettings}
                onUpdate={onUpdateBrandSettings}
                onBack={() => setEditingBrand(false)}
              />
            ) : (
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-900">Brand Settings</h3>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-medium">{brandSettings.name}</p>
                      {brandSettings.tagline && (
                        <p className="text-sm text-gray-500">{brandSettings.tagline}</p>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setEditingBrand(true)}
                    >
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {brandSettings.logo && (
                    <div className="mt-3">
                      <img 
                        src={brandSettings.logo} 
                        alt="Brand Logo" 
                        className="h-8 object-contain"
                      />
                    </div>
                  )}
                </div>
                
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={() => setEditingBrand(true)}
                  className="w-full"
                >
                  <Palette className="w-4 h-4 mr-2" />
                  Edit Brand
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};