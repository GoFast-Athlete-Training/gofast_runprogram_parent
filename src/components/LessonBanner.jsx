import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card.jsx';
import { Calendar, Clock, MapPin } from 'lucide-react';

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
        <CardTitle className="text-2xl">{lesson.title}</CardTitle>
        <CardDescription className="text-orange-100">
          {lesson.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>{lesson.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>{lesson.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5" />
            <span>{lesson.location}</span>
          </div>
        </div>
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

