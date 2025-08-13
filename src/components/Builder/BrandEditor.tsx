import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';
import { BrandSettings } from '../../types';

interface BrandEditorProps {
  brandSettings: BrandSettings;
  onUpdate: (brandSettings: BrandSettings) => void;
  onBack: () => void;
}

export const BrandEditor: React.FC<BrandEditorProps> = ({ brandSettings, onUpdate, onBack }) => {
  const [settings, setSettings] = useState(brandSettings);

  const handleSave = () => {
    onUpdate(settings);
    onBack();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h3 className="font-medium">Brand Settings</h3>
      </div>

      <div className="space-y-4">
        <Input
          label="Brand Name"
          value={settings.name}
          onChange={(e) => setSettings({ ...settings, name: e.target.value })}
          placeholder="Enter your brand name"
        />
        
        <Input
          label="Logo URL (optional)"
          value={settings.logo || ''}
          onChange={(e) => setSettings({ ...settings, logo: e.target.value })}
          placeholder="https://example.com/logo.png"
        />
        
        <Input
          label="Tagline (optional)"
          value={settings.tagline || ''}
          onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
          placeholder="Your brand tagline"
        />
      </div>

      <div className="pt-4 border-t">
        <Button onClick={handleSave} className="w-full">
          Save Brand Settings
        </Button>
      </div>
    </div>
  );
};