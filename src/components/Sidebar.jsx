import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, TrendingUp, Home, BookOpen } from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      label: 'Weekly Lesson Outlook',
      path: '/dashboard',
      icon: Calendar
    },
    {
      label: 'Athlete Progress',
      path: '/feedback',
      icon: TrendingUp
    },
    {
      label: 'Log Homework',
      path: '/log-homework',
      icon: BookOpen
    }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-6">
      <div className="mb-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="font-semibold">Home</span>
        </button>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                isActive(item.path)
                  ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-500'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;

