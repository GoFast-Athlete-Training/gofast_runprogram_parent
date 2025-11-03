import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { Activity, Users } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const sites = [
    { id: '1', name: 'Downtown Site', location: 'City Center' },
    { id: '2', name: 'North Site', location: 'North Campus' },
    { id: '3', name: 'South Site', location: 'South Campus' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to Boys Gotta Run</h1>
          <p className="text-xl text-gray-600">Choose your site or program to get started</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {sites.map((site) => (
            <Card 
              key={site.id}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate(`/register?siteId=${site.id}`)}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Activity className="w-8 h-8" />
                </div>
                <CardTitle>{site.name}</CardTitle>
                <CardDescription>{site.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Select Site</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <div className="w-16 h-16 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-4 mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <CardTitle>New to Boys Gotta Run?</CardTitle>
              <CardDescription>
                Register your child today and join our community of young athletes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => navigate('/register')} size="lg" className="w-full md:w-auto">
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;

