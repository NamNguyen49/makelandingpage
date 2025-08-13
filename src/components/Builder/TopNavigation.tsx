import React from 'react';
import { Save, Eye, Settings, Undo, Redo, Zap } from 'lucide-react';
import { Button } from '../UI/Button';

interface TopNavigationProps {
  onSave: () => void;
  onPreview: () => void;
  saving?: boolean;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({ onSave, onPreview, saving = false }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">N&Q</h1>
              <p className="text-xs text-gray-500">Landing Page Builder</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Undo className="w-4 h-4 mr-1" />
            Undo
          </Button>
          <Button variant="ghost" size="sm">
            <Redo className="w-4 h-4 mr-1" />
            Redo
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4 mr-1" />
            Settings
          </Button>
          <Button variant="secondary" size="sm" onClick={onPreview}>
            <Eye className="w-4 h-4 mr-1" />
            Preview
          </Button>
          <Button size="sm" onClick={onSave} loading={saving}>
            <Save className="w-4 h-4 mr-1" />
            Save
          </Button>
        </div>
      </div>
    </header>
  );
};