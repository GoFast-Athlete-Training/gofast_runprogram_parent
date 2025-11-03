/**
 * API Configuration for GoFast BGR Parent Portal
 * 
 * Backend Base URL: https://api.gofast.com/api/bgr
 * Alternative: https://gofastbackendv2-fall2025.onrender.com/api/bgr
 */

const API_BASE = import.meta.env.VITE_API_BASE || 'https://gofastbackendv2-fall2025.onrender.com/api';
const PROJECT_KEY = import.meta.env.VITE_PROJECT_KEY || 'bgr';

export const API_CONFIG = {
  base: `${API_BASE}/bgr`,
  projectKey: PROJECT_KEY,
};

/**
 * Helper to build API URLs
 */
export const buildApiUrl = (endpoint) => {
  return `${API_CONFIG.base}${endpoint}`;
};

/**
 * Helper for fetch requests with error handling
 */
export const apiRequest = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Request failed:', error);
    throw error;
  }
};

/**
 * Parent hydration endpoints
 */
export const parentApi = {
  hydrate: (parentId) => buildApiUrl(`/parent/${parentId}/hydrate`),
  getAthletes: (parentId) => buildApiUrl(`/parent/${parentId}/athletes`),
  getLesson: (lessonId) => buildApiUrl(`/lesson/${lessonId}`),
  getFeedback: (athleteId) => buildApiUrl(`/feedback?athleteId=${athleteId}`),
};

