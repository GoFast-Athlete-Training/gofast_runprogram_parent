import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Sidebar from '../components/Sidebar.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { Button } from '../components/ui/button.jsx';
import { Calendar, ArrowLeft, Star } from 'lucide-react';

// Hardcoded feedback data by week/lesson
const feedbackByWeek = [
  {
    week: 7,
    weekFocus: 'Dependability & Loyalty',
    date: 'Wednesday, Nov. 5',
    categories: {
      effort: 4,
      attitude: 5,
      performance: 4,
      listening: 5,
      workingWithOthers: 4
    },
    coachComments: 'Alex showed great improvement in endurance this week. Maintained good pace throughout the workout. He was very focused and followed all instructions well. Continue working on breathing technique during longer runs.'
  },
  {
    week: 6,
    weekFocus: 'Respect',
    date: 'Wednesday, Oct. 29',
    categories: {
      effort: 3,
      attitude: 4,
      performance: 3,
      listening: 4,
      workingWithOthers: 4
    },
    coachComments: 'Alex had a solid week. Showed respect to coaches and teammates. Good effort during conditioning drills.'
  }
];

const categoryLabels = {
  effort: 'Effort',
  attitude: 'Attitude',
  performance: 'Performance',
  listening: 'Listening',
  workingWithOthers: 'Working with Others'
};

const Feedback = () => {
  const [selectedWeek, setSelectedWeek] = useState(null);
  const athleteName = 'Alex';

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));
  };

  if (selectedWeek) {
    const feedback = feedbackByWeek.find(f => f.week === selectedWeek);
    return (
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => setSelectedWeek(null)}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Weeks
          </Button>

          <Card className="mb-6 border-2 border-orange-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">Week {feedback.week}: {feedback.weekFocus}</CardTitle>
                  <div className="flex items-center space-x-2 text-orange-100">
                    <Calendar className="w-4 h-4" />
                    <span>{feedback.date}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Categories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(categoryLabels).map(([key, label]) => (
                      <div key={key} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-700">{label}</span>
                          <span className="text-sm font-semibold text-orange-600">
                            {feedback.categories[key]}/5
                          </span>
                        </div>
                        <div className="flex space-x-1">
                          {renderStars(feedback.categories[key])}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Coach Comments</h3>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-gray-700 leading-relaxed">{feedback.coachComments}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Athlete Progress</h1>
          <p className="text-gray-600">
            Coach feedback and progress notes for {athleteName}
          </p>
        </div>

        <div className="space-y-4">
          {feedbackByWeek.map((feedback) => (
            <Card
              key={feedback.week}
              className="cursor-pointer hover:shadow-lg transition-all border-2 hover:border-orange-300"
              onClick={() => setSelectedWeek(feedback.week)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">
                      Week {feedback.week}: {feedback.weekFocus}
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-gray-500 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{feedback.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-600">Average:</span>
                      <div className="flex space-x-1">
                        {renderStars(
                          Math.round(
                            Object.values(feedback.categories).reduce((a, b) => a + b, 0) /
                              Object.values(feedback.categories).length
                          )
                        )}
                      </div>
                      <span className="text-sm text-gray-500">
                        {(
                          Object.values(feedback.categories).reduce((a, b) => a + b, 0) /
                          Object.values(feedback.categories).length
                        ).toFixed(1)}
                        /5
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" className="ml-4">
                    View Details
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Feedback;

