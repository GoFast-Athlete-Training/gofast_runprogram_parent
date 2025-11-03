import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { Button } from '../components/ui/button.jsx';
import { ArrowLeft, Calendar } from 'lucide-react';

// Hardcoded lesson data for demo (same as Dashboard)
const currentLesson = {
  id: '1',
  week: 7,
  weekFocus: 'Dependability & Loyalty',
  date: 'Wednesday, Nov. 5',
  school: 'Discovery Elementary',
  title: 'Week 7: Dependability & Loyalty',
  description: 'Instructor – Lesson is to be there when you say you will be & do the things you promised.',
  goal: '2 ¾ miles',
  workout: [
    {
      name: '3 lap warm up',
      description: '',
      duration: null,
      reps: null
    },
    {
      name: 'Body weight conditioning',
      description: '2 sets of 10 each',
      duration: null,
      reps: '2 sets of 10 each',
      exercises: [
        'Squats',
        'Jumping jacks',
        'Alternating reverse lunges',
        'Single leg squats',
        'Pushups',
        'Sit ups'
      ]
    },
    {
      name: 'Run 8 laps at Tempo',
      description: '',
      duration: null,
      reps: '8 laps'
    }
  ],
  discussion: {
    topic: 'Discuss Loyalty & Dependability',
    example: 'Parents are dependable because they pick you up after school when they say they will and you can depend on parents to feed you and fix things.',
    story: "My best friend asked me to help him practice for the school spelling bee. I promised I'd help him every day after school. Even when I really wanted to go home and play video games, I still showed up to help him practice. That's called being dependable; keeping your promises and showing others they can count on you. And loyalty means standing by your friends and supporting them, even when it's not always easy or fun. My friend didn't win first place, but he said he felt like a winner because I was there for him.",
    definitions: {
      dependability: 'keeping your word and being reliable',
      loyalty: 'being a good friend and sticking with someone through thick and thin'
    },
    notes: 'This helps kids connect their actions (like showing up, helping, supporting friends) to these important character traits.'
  },
  instructorNotes: [
    'Instructors will Map out the 5K run course which should be 600-800m laps for optimal spectator viewing.',
    "Instructors will Speak with Extended Day manager to coordinate the Extended day students' spectating and supporting the runners of the final 5K. They will come out to cheer on their peers.",
    'Encourage Extended Day to make signs and bring noise makers to the 5K finish line.'
  ],
  homeAssignment: 'Running assignment of 10 minutes 1 X this week and stretch for 2 minutes each day.'
};

const Lesson = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // For demo, use the hardcoded lesson
  const lesson = currentLesson.id === id ? currentLesson : null;

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Card>
            <CardContent className="pt-6">
              <p>Lesson not found</p>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-3xl">{lesson.title}</CardTitle>
            <CardDescription className="text-lg">{lesson.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <Calendar className="w-5 h-5 text-gray-500" />
                <span className="font-medium">{lesson.date}</span>
              </div>
              {lesson.goal && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Goal</h3>
                  <p className="text-gray-700">{lesson.goal}</p>
                </div>
              )}
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Workout Plan</h3>
              <div className="space-y-4">
                {lesson.workout.map((exercise, index) => (
                  <div key={index} className="border-l-4 border-orange-500 pl-4 py-2">
                    <h4 className="font-semibold">{exercise.name}</h4>
                    {exercise.description && (
                      <p className="text-gray-600 text-sm">{exercise.description}</p>
                    )}
                    {exercise.reps && (
                      <p className="text-gray-500 text-xs mt-1">Reps: {exercise.reps}</p>
                    )}
                    {exercise.exercises && (
                      <ul className="list-disc list-inside text-sm text-gray-600 mt-2 ml-2">
                        {exercise.exercises.map((ex, i) => (
                          <li key={i}>{ex}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {lesson.discussion && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">{lesson.discussion.topic}</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">{lesson.discussion.example}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 italic">"{lesson.discussion.story}"</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold">Definitions:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li><strong>Dependability:</strong> {lesson.discussion.definitions.dependability}</li>
                      <li><strong>Loyalty:</strong> {lesson.discussion.definitions.loyalty}</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600">{lesson.discussion.notes}</p>
                </div>
              </div>
            )}

            {lesson.homeAssignment && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Home Assignment</h3>
                <p className="text-gray-700">{lesson.homeAssignment}</p>
              </div>
            )}

            {lesson.instructorNotes && lesson.instructorNotes.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Instructor Notes</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {lesson.instructorNotes.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Lesson;

