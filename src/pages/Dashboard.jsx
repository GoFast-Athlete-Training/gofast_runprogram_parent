import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import LessonBanner from '../components/LessonBanner.jsx';
import RSVPCard from '../components/RSVPCard.jsx';
import SurveyForm from '../components/SurveyForm.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { Button } from '../components/ui/button.jsx';
import { Calendar, Activity, BookOpen, MessageSquare, TrendingUp } from 'lucide-react';

// Hardcoded workout data for Week 7: Dependability & Loyalty
const currentLesson = {
  id: '1',
  week: 7,
  weekFocus: 'Dependability & Loyalty',
  date: 'Wednesday, Nov. 5',
  school: 'Discovery Elementary',
  title: 'Week 7: Dependability & Loyalty',
  description: 'Instructor – Lesson is to be there when you say you will be & do the things you promised.',
  goal: '2 ¾ miles',
  workout: [
    {
      name: '3 lap warm up',
      description: '',
      duration: null,
      reps: null
    },
    {
      name: 'Body weight conditioning',
      description: '2 sets of 10 each',
      duration: null,
      reps: '2 sets of 10 each',
      exercises: [
        'Squats',
        'Jumping jacks',
        'Alternating reverse lunges',
        'Single leg squats',
        'Pushups',
        'Sit ups'
      ]
    },
    {
      name: 'Run 8 laps at Tempo',
      description: '',
      duration: null,
      reps: '8 laps'
    }
  ],
  discussion: {
    topic: 'Discuss Loyalty & Dependability',
    example: 'Parents are dependable because they pick you up after school when they say they will and you can depend on parents to feed you and fix things.',
    story: "My best friend asked me to help him practice for the school spelling bee. I promised I'd help him every day after school. Even when I really wanted to go home and play video games, I still showed up to help him practice. That's called being dependable; keeping your promises and showing others they can count on you. And loyalty means standing by your friends and supporting them, even when it's not always easy or fun. My friend didn't win first place, but he said he felt like a winner because I was there for him.",
    definitions: {
      dependability: 'keeping your word and being reliable',
      loyalty: 'being a good friend and sticking with someone through thick and thin'
    },
    notes: 'This helps kids connect their actions (like showing up, helping, supporting friends) to these important character traits.'
  },
  instructorNotes: [
    'Instructors will Map out the 5K run course which should be 600-800m laps for optimal spectator viewing.',
    "Instructors will Speak with Extended Day manager to coordinate the Extended day students' spectating and supporting the runners of the final 5K. They will come out to cheer on their peers.",
    'Encourage Extended Day to make signs and bring noise makers to the 5K finish line.'
  ],
  homeAssignment: 'Running assignment of 10 minutes 1 X this week and stretch for 2 minutes each day.'
};

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* School Banner */}
        <div className="mb-6 bg-orange-500 text-white py-3 px-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold">{currentLesson.school}</h2>
        </div>

        {/* Week Focus and Date */}
        <div className="mb-6">
          <div className="mb-2">
            <h1 className="text-3xl font-bold text-gray-900">
              {currentLesson.title}
            </h1>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 mb-4">
            <Calendar className="w-5 h-5" />
            <span className="text-lg">{currentLesson.date}</span>
          </div>
        </div>

        <div className="mb-6">
          <LessonBanner lesson={currentLesson} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <RSVPCard lessonId={currentLesson.id} />
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Upcoming Sessions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Next session: {currentLesson.date}
              </p>
              <Button variant="outline" className="w-full">
                View Calendar
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mb-6">
          <SurveyForm lessonId={currentLesson.id} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card 
            className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-orange-300"
            onClick={() => navigate(`/lesson/${currentLesson.id}`)}
          >
            <CardHeader>
              <div className="w-16 h-16 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <CardTitle>View Full Lesson</CardTitle>
              <CardDescription>See complete workout plan, discussion topics, and home assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                View Lesson
              </Button>
            </CardContent>
          </Card>
          
          <Card 
            className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-orange-300"
            onClick={() => navigate('/feedback')}
          >
            <CardHeader>
              <div className="w-16 h-16 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-4">
                <MessageSquare className="w-8 h-8" />
              </div>
              <CardTitle>Coach Feedback</CardTitle>
              <CardDescription>View feedback and notes from your child's coach</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                View Feedback
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-gray-200 opacity-75">
            <CardHeader>
              <div className="w-16 h-16 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <CardTitle>Progress Tracking</CardTitle>
              <CardDescription>Coming soon - track your child's running progress over time</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;

