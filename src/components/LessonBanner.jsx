import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card.jsx';

const LessonBanner = ({ lesson }) => {
  const navigate = useNavigate();

  if (!lesson) {
    return (
      <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <CardHeader>
          <CardTitle>No lesson scheduled this week</CardTitle>
          <CardDescription className="text-orange-100">
            Check back soon for the next workout!
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white mb-6">
      <CardHeader>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4 mb-4 border-2 border-white/30">
          <p className="text-2xl font-bold text-white mb-2">Character Focus</p>
          <p className="text-3xl font-extrabold text-white">{lesson.weekFocus}</p>
        </div>
      </CardHeader>
      <CardContent>
        {lesson.goal && (
          <div className="mb-4">
            <p className="text-lg font-semibold">Goal: {lesson.goal}</p>
          </div>
        )}
        <Button
          variant="outline"
          className="bg-white text-orange-500 hover:bg-orange-50"
          onClick={() => navigate(`/lesson/${lesson.id}`)}
        >
          View Full Lesson Plan
        </Button>
      </CardContent>
    </Card>
  );
};

export default LessonBanner;

