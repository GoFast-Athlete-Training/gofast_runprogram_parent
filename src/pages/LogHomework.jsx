import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Sidebar from '../components/Sidebar.jsx';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card.jsx';
import { Button } from '../components/ui/button.jsx';
import { Input } from '../components/ui/input.jsx';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

// Hardcoded current week homework
const currentHomework = {
  week: 7,
  weekFocus: 'Dependability & Loyalty',
  runningAssignment: 'Running assignment of 10 minutes 1 X this week',
  stretchingAssignment: 'Stretch for 2 minutes each day'
};

const LogHomework = () => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [runningMinutes, setRunningMinutes] = useState('');
  const [distance, setDistance] = useState('');
  const [stretchingDays, setStretchingDays] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleStretchingToggle = (day) => {
    setStretchingDays(prev => 
      prev.includes(day) 
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would save to backend
    console.log('Homework logged:', {
      date,
      runningMinutes,
      distance,
      stretchingDays
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setDate(new Date().toISOString().split('T')[0]);
      setRunningMinutes('');
      setDistance('');
      setStretchingDays([]);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Log Homework</h1>
            <p className="text-gray-600">
              Track your child's weekly running and stretching assignments
            </p>
          </div>

          <Card className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardHeader>
              <CardTitle className="text-xl">Week {currentHomework.week}: {currentHomework.weekFocus}</CardTitle>
              <CardDescription className="text-orange-100 mt-2">
                <p className="mb-1">• {currentHomework.runningAssignment}</p>
                <p>• {currentHomework.stretchingAssignment}</p>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Log Completed Work</CardTitle>
              <CardDescription>
                Record when your child completes their running and stretching assignments
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-gray-900">Homework logged successfully!</p>
                  <p className="text-gray-600">Great job staying on track!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date Completed
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Running Assignment</h3>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Running Time (minutes)
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          type="number"
                          min="1"
                          max="60"
                          placeholder="10"
                          value={runningMinutes}
                          onChange={(e) => setRunningMinutes(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Target: 10 minutes</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Distance (optional)
                      </label>
                      <Input
                        type="number"
                        step="0.1"
                        min="0"
                        placeholder="e.g., 1.5"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">Miles - optional, if you tracked it</p>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Stretching Assignment</h3>
                    <p className="text-sm text-gray-600 mb-4">Target: 2 minutes each day</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {daysOfWeek.map((day) => (
                        <button
                          key={day}
                          type="button"
                          onClick={() => handleStretchingToggle(day)}
                          className={`px-4 py-3 rounded-lg border-2 transition-all ${
                            stretchingDays.includes(day)
                              ? 'bg-green-50 border-green-500 text-green-700 font-semibold'
                              : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-orange-300'
                          }`}
                        >
                          {day.slice(0, 3)}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Selected: {stretchingDays.length} day{stretchingDays.length !== 1 ? 's' : ''}
                    </p>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" className="w-full" size="lg">
                      Log Homework
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default LogHomework;

