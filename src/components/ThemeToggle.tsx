import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '../contexts/ThemeContext';
const ThemeToggle = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  return <div className="fixed bottom-8 right-8 z-50">
      <div className="backdrop-blur-sm rounded-full p-4 shadow-lg border border-gray-200 dark:border-gray-700 bg-[#0c148e]/[0.81] py-[12px] px-[12px]">
        <div className="flex items-center gap-3">
          <Sun className="w-5 h-5 text-yellow-500" />
          <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} className="data-[state=checked]:bg-blue-600" />
          <Moon className="w-5 h-5 text-blue-500" />
        </div>
      </div>
    </div>;
};
export default ThemeToggle;