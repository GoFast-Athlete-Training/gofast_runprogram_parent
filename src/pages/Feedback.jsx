import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeedbackCard from '../components/FeedbackCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { MessageSquare } from 'lucide-react';
import { useHydrateParent } from '../hooks/useHydrateParent';

const Feedback = () => {
  const { parentData, feedback, loading } = useHydrateParent();
  const [athleteName] = useState('Alex'); // Demo: Would come from parentData

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

