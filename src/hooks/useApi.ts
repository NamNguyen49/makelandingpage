import { useState, useCallback } from 'react';
import { LandingPage, PageSection, MenuItem } from '../types';

const API_BASE = 'http://localhost:3001/api';

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiCall = useCallback(async (url: string, options?: RequestInit) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_BASE}${url}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getLandingPage = useCallback(async (id: string): Promise<LandingPage> => {
    return apiCall(`/pages/${id}`);
  }, [apiCall]);

  const updateLandingPage = useCallback(async (page: LandingPage): Promise<LandingPage> => {
    return apiCall(`/pages/${page.id}`, {
      method: 'PUT',
      body: JSON.stringify(page),
    });
  }, [apiCall]);

  const createSection = useCallback(async (pageId: string, section: Omit<PageSection, 'id'>): Promise<PageSection> => {
    return apiCall(`/pages/${pageId}/sections`, {
      method: 'POST',
      body: JSON.stringify(section),
    });
  }, [apiCall]);

  const updateSection = useCallback(async (pageId: string, section: PageSection): Promise<PageSection> => {
    return apiCall(`/pages/${pageId}/sections/${section.id}`, {
      method: 'PUT',
      body: JSON.stringify(section),
    });
  }, [apiCall]);

  const deleteSection = useCallback(async (pageId: string, sectionId: string): Promise<void> => {
    return apiCall(`/pages/${pageId}/sections/${sectionId}`, {
      method: 'DELETE',
    });
  }, [apiCall]);

  const createMenuItem = useCallback(async (pageId: string, menuItem: Omit<MenuItem, 'id'>): Promise<MenuItem> => {
    return apiCall(`/pages/${pageId}/menu`, {
      method: 'POST',
      body: JSON.stringify(menuItem),
    });
  }, [apiCall]);

  const updateMenuItem = useCallback(async (pageId: string, menuItem: MenuItem): Promise<MenuItem> => {
    return apiCall(`/pages/${pageId}/menu/${menuItem.id}`, {
      method: 'PUT',
      body: JSON.stringify(menuItem),
    });
  }, [apiCall]);

  const deleteMenuItem = useCallback(async (pageId: string, menuItemId: string): Promise<void> => {
    return apiCall(`/pages/${pageId}/menu/${menuItemId}`, {
      method: 'DELETE',
    });
  }, [apiCall]);

  return {
    loading,
    error,
    getLandingPage,
    updateLandingPage,
    createSection,
    updateSection,
    deleteSection,
    createMenuItem,
    updateMenuItem,
    deleteMenuItem,
  };
};