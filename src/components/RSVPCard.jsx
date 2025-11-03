import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { CalendarCheck, CalendarX } from 'lucide-react';

const RSVPCard = ({ lessonId }) => {
  const [rsvpStatus, setRsvpStatus] = useState(null);

  const handleRSVP = (status) => {
    setRsvpStatus(status);
    // Demo: Store RSVP status
    localStorage.setItem(`bgr_rsvp_${lessonId}`, status);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <CalendarCheck className="w-5 h-5" />
          <span>RSVP for This Week's Lesson</span>
        </CardTitle>
        <CardDescription>
          Let your coach know if your child will be attending
        </CardDescription>
      </CardHeader>
      <CardContent>
        {rsvpStatus ? (
          <div className="text-center py-4">
            <p className="text-lg font-semibold mb-2">
              {rsvpStatus === 'attending' ? (
                <span className="text-green-600 flex items-center justify-center space-x-2">
                  <CalendarCheck className="w-5 h-5" />
                  <span>Attending</span>
                </span>
              ) : (
                <span className="text-red-600 flex items-center justify-center space-x-2">
                  <CalendarX className="w-5 h-5" />
                  <span>Not Attending</span>
                </span>
              )}
            </p>
            <Button variant="outline" onClick={() => setRsvpStatus(null)}>
              Change Response
            </Button>
          </div>
        ) : (
          <div className="flex space-x-4">
            <Button
              className="flex-1 bg-green-500 hover:bg-green-600"
              onClick={() => handleRSVP('attending')}
            >
              <CalendarCheck className="w-4 h-4 mr-2" />
              Attending
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => handleRSVP('not-attending')}
            >
              <CalendarX className="w-4 h-4 mr-2" />
              Not Attending
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RSVPCard;

