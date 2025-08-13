import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database (in a real app, you'd use MongoDB)
let pages = {
  'default': {
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
  }
};

// Routes

// Get a landing page
app.get('/api/pages/:id', (req, res) => {
  const { id } = req.params;
  const page = pages[id];
  
  if (!page) {
    return res.status(404).json({ error: 'Page not found' });
  }
  
  res.json(page);
});

// Update a landing page
app.put('/api/pages/:id', (req, res) => {
  const { id } = req.params;
  const updatedPage = req.body;
  
  if (!pages[id]) {
    return res.status(404).json({ error: 'Page not found' });
  }
  
  pages[id] = {
    ...updatedPage,
    id,
    updatedAt: new Date().toISOString(),
  };
  
  res.json(pages[id]);
});

// Create a new section
app.post('/api/pages/:pageId/sections', (req, res) => {
  const { pageId } = req.params;
  const sectionData = req.body;
  
  if (!pages[pageId]) {
    return res.status(404).json({ error: 'Page not found' });
  }
  
  const newSection = {
    ...sectionData,
    id: uuidv4(),
  };
  
  pages[pageId].sections.push(newSection);
  pages[pageId].updatedAt = new Date().toISOString();
  
  res.json(newSection);
});

// Update a section
app.put('/api/pages/:pageId/sections/:sectionId', (req, res) => {
  const { pageId, sectionId } = req.params;
  const updatedSection = req.body;
  
  if (!pages[pageId]) {
    return res.status(404).json({ error: 'Page not found' });
  }
  
  const sectionIndex = pages[pageId].sections.findIndex(s => s.id === sectionId);
  if (sectionIndex === -1) {
    return res.status(404).json({ error: 'Section not found' });
  }
  
  pages[pageId].sections[sectionIndex] = { ...updatedSection, id: sectionId };
  pages[pageId].updatedAt = new Date().toISOString();
  
  res.json(pages[pageId].sections[sectionIndex]);
});

// Delete a section
app.delete('/api/pages/:pageId/sections/:sectionId', (req, res) => {
  const { pageId, sectionId } = req.params;
  
  if (!pages[pageId]) {
    return res.status(404).json({ error: 'Page not found' });
  }
  
  pages[pageId].sections = pages[pageId].sections.filter(s => s.id !== sectionId);
  pages[pageId].updatedAt = new Date().toISOString();
  
  res.json({ success: true });
});

// Create a new menu item
app.post('/api/pages/:pageId/menu', (req, res) => {
  const { pageId } = req.params;
  const menuItemData = req.body;
  
  if (!pages[pageId]) {
    return res.status(404).json({ error: 'Page not found' });
  }
  
  const newMenuItem = {
    ...menuItemData,
    id: uuidv4(),
  };
  
  pages[pageId].menuItems.push(newMenuItem);
  pages[pageId].updatedAt = new Date().toISOString();
  
  res.json(newMenuItem);
});

// Update a menu item
app.put('/api/pages/:pageId/menu/:menuId', (req, res) => {
  const { pageId, menuId } = req.params;
  const updatedMenuItem = req.body;
  
  if (!pages[pageId]) {
    return res.status(404).json({ error: 'Page not found' });
  }
  
  const menuIndex = pages[pageId].menuItems.findIndex(m => m.id === menuId);
  if (menuIndex === -1) {
    return res.status(404).json({ error: 'Menu item not found' });
  }
  
  pages[pageId].menuItems[menuIndex] = { ...updatedMenuItem, id: menuId };
  pages[pageId].updatedAt = new Date().toISOString();
  
  res.json(pages[pageId].menuItems[menuIndex]);
});

// Delete a menu item
app.delete('/api/pages/:pageId/menu/:menuId', (req, res) => {
  const { pageId, menuId } = req.params;
  
  if (!pages[pageId]) {
    return res.status(404).json({ error: 'Page not found' });
  }
  
  pages[pageId].menuItems = pages[pageId].menuItems.filter(m => m.id !== menuId);
  pages[pageId].updatedAt = new Date().toISOString();
  
  res.json({ success: true });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});