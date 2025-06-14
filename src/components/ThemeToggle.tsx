
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="backdrop-blur-sm rounded-full p-4 shadow-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 py-[12px] px-[12px] transition-all duration-500 hover:shadow-xl hover:scale-105">
        <div className="flex items-center gap-3">
          <Sun 
            className={`w-5 h-5 transition-all duration-500 ${
              theme === 'light' 
                ? 'text-yellow-500 scale-110 rotate-0' 
                : 'text-gray-400 scale-90 rotate-180'
            }`}
            aria-hidden="true"
          />
          <Switch 
            checked={theme === 'dark'} 
            onCheckedChange={toggleTheme} 
            className="data-[state=checked]:bg-blue-600 focus-ring transition-all duration-300"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          />
          <Moon 
            className={`w-5 h-5 transition-all duration-500 ${
              theme === 'dark' 
                ? 'text-blue-400 scale-110 rotate-0' 
                : 'text-gray-400 scale-90 -rotate-180'
            }`}
            aria-hidden="true"
          />
        </div>
        <span className="sr-only">
          Current theme: {theme}. Click to switch to {theme === 'dark' ? 'light' : 'dark'} mode.
        </span>
      </div>
    </div>
  );
};

export default ThemeToggle;
