import React, { useState, useEffect } from 'react';
import { parentApi, apiRequest } from '../lib/api.js';

/**
 * Hook to hydrate parent data from backend
 * Follows FRONTEND_BUILDS_FOR_GOFAST.md hydration pattern:
 * - Entity-specific route: /api/bgr/parent/:parentId/hydrate
 * - localStorage caching with key pattern: bgr_parent_${parentId}_data
 * - Always hydrate when landing on parent dashboard
 */
export const useHydrateParent = (parentId) => {
  const [parentData, setParentData] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!parentId) {
      // For demo purposes, use default parentId if not provided
      // In production, parentId should come from auth/session
      const defaultParentId = localStorage.getItem('bgr_parent_id') || '1';
      parentId = defaultParentId;
    }

    const hydrate = async () => {
      setLoading(true);
      setError(null);
      
      const cacheKey = `bgr_parent_${parentId}_data`;
      
      // Check localStorage cache first
      const cachedData = localStorage.getItem(cacheKey);
      if (cachedData) {
        try {
          const parsed = JSON.parse(cachedData);
          setParentData(parsed.parentData);
          setCurrentLesson(parsed.currentLesson);
          setFeedback(parsed.feedback || []);
          setLoading(false);
          // Still hydrate in background to refresh data
        } catch (err) {
          console.error('Error parsing cached data:', err);
          // Continue to API call if cache is invalid
        }
      }

      try {
        // Hydrate from backend
        const url = parentApi.hydrate(parentId);
        const data = await apiRequest(url);

        setParentData(data.parentData || data.parent);
        setCurrentLesson(data.currentLesson || data.lesson);
        setFeedback(data.feedback || []);

        // Cache in localStorage
        localStorage.setItem(cacheKey, JSON.stringify({
          parentData: data.parentData || data.parent,
          currentLesson: data.currentLesson || data.lesson,
          feedback: data.feedback || []
        }));

        setLoading(false);
      } catch (err) {
        console.error('Hydration error:', err);
        setError(err.message);
        setLoading(false);
        
        // If API fails and we have cached data, use it
        if (cachedData) {
          const parsed = JSON.parse(cachedData);
          setParentData(parsed.parentData);
          setCurrentLesson(parsed.currentLesson);
          setFeedback(parsed.feedback || []);
        }
      }
    };

    hydrate();
  }, [parentId]);

  return {
    parentData,
    currentLesson,
    feedback,
    loading,
    error
  };
};

