import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button.jsx';
import { Input } from '../components/ui/input.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { Users } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('parent@boysgottarun.com');
  const [password, setPassword] = useState('demo123');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Demo: Just simulate loading and go to dashboard - no real auth
    await new Promise(resolve => setTimeout(resolve, 500));

    // Store mock parent data for demo (backend will know site automatically)
    localStorage.setItem('bgr_parent_auth', JSON.stringify({
      email: email,
      parentId: '1',
      athleteId: '1',
      athleteName: 'Johnny'
    }));

    setLoading(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center px-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="w-20 h-20 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-4">
            <Users className="w-10 h-10" />
          </div>
          <CardTitle className="text-3xl">Parent Login</CardTitle>
          <CardDescription className="text-base">
            Each parent will get a special login to make a unique profile. You can also set the onboarding flow with videos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="parent@boysgottarun.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-4 text-center">
            Demo: Credentials are pre-filled. Click "Sign In" to continue.
          </p>
          <div className="mt-4 text-center">
            <button 
              onClick={() => navigate('/')} 
              className="text-sm text-orange-600 hover:underline"
            >
              ← Back to Welcome
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;

