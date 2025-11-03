import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import LessonBanner from '../components/LessonBanner.jsx';
import RSVPCard from '../components/RSVPCard.jsx';
import SurveyForm from '../components/SurveyForm.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { Button } from '../components/ui/button.jsx';
import { Calendar, Activity } from 'lucide-react';
import { useHydrateParent } from '../hooks/useHydrateParent.js';

const Dashboard = () => {
  const navigate = useNavigate();
  const { parentData, currentLesson, loading } = useHydrateParent();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* School Banner */}
        {currentLesson?.school && (
          <div className="mb-6 bg-orange-500 text-white py-3 px-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold">{currentLesson.school}</h2>
          </div>
        )}

        {/* Week Focus and Date */}
        <div className="mb-6">
          <div className="mb-2">
            <h1 className="text-3xl font-bold text-gray-900">
              {currentLesson?.title || 'Current Week'}
            </h1>
          </div>
          {currentLesson?.date && (
            <div className="flex items-center space-x-2 text-gray-600 mb-4">
              <Calendar className="w-5 h-5" />
              <span className="text-lg">{currentLesson.date}</span>
            </div>
          )}
        </div>

        <div className="mb-6">
          <LessonBanner lesson={currentLesson} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <RSVPCard lessonId={currentLesson?.id} />
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Upcoming Sessions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Next session: {currentLesson?.date || 'TBD'}
              </p>
              <Button variant="outline" className="w-full">
                View Calendar
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mb-6">
          <SurveyForm lessonId={currentLesson?.id} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate(`/lesson/${currentLesson?.id}`)}>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <Activity className="w-6 h-6" />
              </div>
              <CardTitle>View Lessons</CardTitle>
              <CardDescription>See all workouts and lesson plans</CardDescription>
            </CardHeader>
          </Card>
          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate('/feedback')}>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-4">
                <Activity className="w-6 h-6" />
              </div>
              <CardTitle>Coach Feedback</CardTitle>
              <CardDescription>View feedback from coaches</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <Activity className="w-6 h-6" />
              </div>
              <CardTitle>Progress</CardTitle>
              <CardDescription>Track your child's progress</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;

