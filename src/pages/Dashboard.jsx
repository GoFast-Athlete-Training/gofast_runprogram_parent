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
  
  // Demo: Mock athlete name - no real auth
  const athleteName = 'Johnny';

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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back!
          </h1>
          <p className="text-gray-600">
            Here's what's happening with {athleteName}'s running program this week
          </p>
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

