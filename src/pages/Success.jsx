import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { CheckCircle } from 'lucide-react';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center px-4">
      <Card className="max-w-md w-full text-center">
        <CardHeader>
          <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12" />
          </div>
          <CardTitle>Registration Successful!</CardTitle>
          <CardDescription>
            Thank you for registering with Boys Gotta Run. Your child is all set to start their running journey!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600">
            You'll receive a confirmation email shortly with program details and next steps.
          </p>
          <Button onClick={() => navigate('/dashboard')} className="w-full" size="lg">
            Go to Dashboard
          </Button>
          <Button onClick={() => navigate('/')} variant="outline" className="w-full">
            Return to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Success;

