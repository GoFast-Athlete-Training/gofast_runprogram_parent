import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { Activity, ArrowRight } from 'lucide-react';

const Welcome = () => {
  const navigate = useNavigate();
  
  // Demo: Mock athlete name - would come from auth/parent data
  const athleteName = 'Johnny';

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center">
          <div className="w-20 h-20 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-6">
            <Activity className="w-10 h-10" />
          </div>
          <CardTitle className="text-4xl mb-4">Welcome Parents!</CardTitle>
          <CardDescription className="text-lg">
            {athleteName} is one of our athletes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-2">
            <p className="text-gray-600">
              Track your child's running journey, view workouts, and see coach feedback.
            </p>
          </div>
          
          <Button 
            onClick={() => navigate('/dashboard')} 
            size="lg" 
            className="w-full"
          >
            View the Athlete Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <div className="text-center">
            <button 
              onClick={() => navigate('/login')} 
              className="text-sm text-gray-600 hover:text-orange-600"
            >
              Or sign in with your account
            </button>
          </div>

          <div className="text-center pt-4 border-t">
            <p className="text-sm text-gray-500">
              New to Boys Gotta Run? <button onClick={() => navigate('/register')} className="text-orange-600 hover:underline">Register here</button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Welcome;

