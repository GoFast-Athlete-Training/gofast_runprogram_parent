import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button.jsx';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
          <img src="/logo.avif" alt="Boys Gotta Run" className="w-8 h-8" />
          <span className="text-xl font-bold text-gray-900">Boys Gotta Run</span>
        </div>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" onClick={() => navigate('/dashboard')}>
            Weekly Lesson Outlook
          </Button>
          <Button variant="ghost" onClick={() => navigate('/feedback')}>
            Athlete Progress
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

