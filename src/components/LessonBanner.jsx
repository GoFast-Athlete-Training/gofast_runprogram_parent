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
        <CardDescription className="text-orange-100 text-lg">
          {lesson.description}
        </CardDescription>
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

