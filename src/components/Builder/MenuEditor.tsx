import React, { useState } from 'react';
import { Plus, Trash2, GripVertical } from 'lucide-react';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';
import { MenuItem } from '../../types';

interface MenuEditorProps {
  menuItems: MenuItem[];
  onUpdate: (menuItem: MenuItem) => void;
  onDelete: (menuItemId: string) => void;
  onAdd: () => void;
}

export const MenuEditor: React.FC<MenuEditorProps> = ({
  menuItems,
  onUpdate,
  onDelete,
  onAdd,
}) => {
  const [editingItem, setEditingItem] = useState<string | null>(null);

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">Navigation Menu</h3>
        <Button size="sm" onClick={onAdd}>
          <Plus className="w-4 h-4 mr-1" />
          Add Item
        </Button>
      </div>

      <div className="space-y-2">
        {menuItems.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center flex-1">
                <GripVertical className="w-4 h-4 text-gray-400 mr-2" />
                {editingItem === item.id ? (
                  <div className="flex-1 space-y-2">
                    <Input
                      value={item.title}
                      onChange={(e) => onUpdate({ ...item, title: e.target.value })}
                      placeholder="Menu title"
                    />
                    <Input
                      value={item.url}
                      onChange={(e) => onUpdate({ ...item, url: e.target.value })}
                      placeholder="URL"
                    />
                    <div className="flex space-x-2">
                      <Button size="sm" onClick={() => setEditingItem(null)}>
                        Done
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div 
                    className="flex-1 cursor-pointer"
                    onClick={() => setEditingItem(item.id)}
                  >
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.url}</p>
                  </div>
                )}
              </div>
              {editingItem !== item.id && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDelete(item.id)}
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};