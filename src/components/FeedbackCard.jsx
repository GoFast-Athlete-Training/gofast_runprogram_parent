import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Star, Clock } from 'lucide-react';

const FeedbackCard = ({ feedback }) => {
  if (!feedback) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-gray-500">
            No feedback available yet. Coach feedback is typically posted 24 hours after the lesson.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Coach Feedback</span>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < feedback.rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </CardTitle>
        <CardDescription className="flex items-center space-x-2">
          <Clock className="w-4 h-4" />
          <span>{feedback.date}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 whitespace-pre-wrap">{feedback.notes}</p>
      </CardContent>
    </Card>
  );
};

export default FeedbackCard;

