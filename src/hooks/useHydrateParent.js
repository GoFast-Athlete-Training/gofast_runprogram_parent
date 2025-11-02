import { useState, useEffect } from 'react';

// Demo: Mock parent data
const mockParentData = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  athletes: [
    { id: '1', name: 'Alex Doe', age: 10, grade: '5th' }
  ]
};

const mockCurrentLesson = {
  id: '1',
  title: 'Speed and Endurance Training',
  description: 'Focus on building speed and maintaining endurance over longer distances',
  date: 'January 15, 2025',
  duration: '45 minutes',
  location: 'Downtown Track',
  workout: [
    {
      name: 'Warm-up Run',
      description: 'Easy jog for 5 minutes',
      duration: '5 min',
      reps: null
    },
    {
      name: 'Sprint Intervals',
      description: '8 x 100m sprints with 1 minute rest',
      duration: '15 min',
      reps: '8 sets'
    },
    {
      name: 'Endurance Run',
      description: 'Moderate pace run for 1 mile',
      duration: '10 min',
      reps: '1 mile'
    },
    {
      name: 'Cool-down',
      description: 'Gentle walk and stretching',
      duration: '5 min',
      reps: null
    }
  ],
  focusAreas: ['Speed', 'Endurance', 'Form'],
  notes: 'Focus on maintaining good running form during sprints. Rest is important between intervals.'
};

const mockFeedback = [
  {
    rating: 4,
    date: 'January 8, 2025',
    notes: 'Alex showed great improvement in endurance this week. Maintained good pace throughout the workout. Continue working on breathing technique.'
  }
];

export const useHydrateParent = () => {
  const [parentData, setParentData] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Demo: Simulate API call
    const hydrate = async () => {
      setLoading(true);
      
      // Check localStorage cache first
      const cachedData = localStorage.getItem('bgr_parent_data');
      if (cachedData) {
        const parsed = JSON.parse(cachedData);
        setParentData(parsed.parentData);
        setCurrentLesson(parsed.currentLesson);
        setFeedback(parsed.feedback || []);
        setLoading(false);
        return;
      }

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mock API response
      // TODO: Replace with real API call
      // const response = await fetch(`${import.meta.env.VITE_API_BASE}/bgr/parent/${parentId}/hydrate`);
      // const data = await response.json();

      const data = {
        parentData: mockParentData,
        currentLesson: mockCurrentLesson,
        feedback: mockFeedback
      };

      setParentData(data.parentData);
      setCurrentLesson(data.currentLesson);
      setFeedback(data.feedback);

      // Cache in localStorage
      localStorage.setItem('bgr_parent_data', JSON.stringify(data));

      setLoading(false);
    };

    hydrate();
  }, []);

  return {
    parentData,
    currentLesson,
    feedback,
    loading
  };
};

