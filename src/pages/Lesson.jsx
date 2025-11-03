import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { Button } from '../components/ui/button.jsx';
import { ArrowLeft, Clock, MapPin, Calendar } from 'lucide-react';
import { useHydrateParent } from '../hooks/useHydrateParent.js';

const Lesson = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentLesson } = useHydrateParent();
  
  // For demo, if we have a current lesson, use it; otherwise check ID
  const lesson = currentLesson?.id === id ? currentLesson : null;

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Card>
            <CardContent className="pt-6">
              <p>Lesson not found</p>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-3xl">{lesson.title}</CardTitle>
            <CardDescription className="text-lg">{lesson.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-gray-500" />
                <span className="font-medium">{lesson.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-gray-500" />
                <span className="font-medium">{lesson.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span className="font-medium">{lesson.location}</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Workout Plan</h3>
              <div className="space-y-4">
                {lesson.workout.map((exercise, index) => (
                  <div key={index} className="border-l-4 border-orange-500 pl-4 py-2">
                    <h4 className="font-semibold">{exercise.name}</h4>
                    <p className="text-gray-600 text-sm">{exercise.description}</p>
                    <p className="text-gray-500 text-xs mt-1">
                      Duration: {exercise.duration} | Reps: {exercise.reps || 'N/A'}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Focus Areas</h3>
              <div className="flex flex-wrap gap-2">
                {lesson.focusAreas.map((area, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {lesson.notes && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Coach Notes</h3>
                <p className="text-gray-700 whitespace-pre-wrap">{lesson.notes}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Lesson;

