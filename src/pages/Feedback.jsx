import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FeedbackCard from '../components/FeedbackCard.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { MessageSquare } from 'lucide-react';

// Hardcoded feedback data for demo
const feedback = [
  {
    rating: 4,
    date: 'January 8, 2025',
    notes: 'Alex showed great improvement in endurance this week. Maintained good pace throughout the workout. Continue working on breathing technique.'
  }
];

const Feedback = () => {
  const athleteName = 'Alex'; // Demo: Would come from parentData

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Coach's Corner</h1>
          <p className="text-gray-600">
            Feedback and notes for {athleteName}
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5" />
              <span>About Coach Feedback</span>
            </CardTitle>
            <CardDescription>
              Coach feedback is typically posted 24 hours after each lesson. 
              Here you can see how your child is progressing and what the coach has observed.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="space-y-6">
          {feedback && feedback.length > 0 ? (
            feedback.map((item, index) => (
              <FeedbackCard key={index} feedback={item} />
            ))
          ) : (
            <FeedbackCard feedback={null} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Feedback;

