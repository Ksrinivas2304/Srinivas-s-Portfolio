
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Code, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const skills = ['Full Stack Developer', 'Cloud Architect', 'Problem Solver', 'Tech Innovator'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 dark:from-black dark:via-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_48%,rgba(16,185,129,0.05)_49%,rgba(16,185,129,0.05)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium animate-fade-in">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Available for opportunities
              </div>

              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight animate-fade-in delay-200">
                <span className="bg-gradient-to-r from-white via-green-400 to-green-300 dark:from-white dark:via-green-300 dark:to-green-200 bg-clip-text text-transparent">
                  Kusumanchi
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                  Srinivas
                </span>
              </h1>

              <div className="text-2xl md:text-3xl font-semibold text-gray-300 dark:text-gray-200 animate-fade-in delay-400">
                <div className="flex justify-center">
                  <span className="text-green-400 dark:text-green-300 transition-all duration-700 ease-in-out">
                    {skills[currentSkill]}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xl text-gray-400 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-600">
              Transforming ideas into powerful digital solutions with expertise in modern web technologies, 
              cloud infrastructure, and innovative problem-solving approaches.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-700">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={() => scrollToSection('projects')}
              >
                Explore My Work
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-200"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center space-x-8 animate-fade-in delay-800">
              <a 
                href="https://github.com/Ksrinivas2304" 
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-400 dark:text-gray-300 hover:text-green-400 dark:hover:text-green-300 transition-all duration-200"
                title="GitHub"
              >
                <div className="p-3 rounded-full bg-gray-800 dark:bg-gray-700 group-hover:bg-green-900/30 dark:group-hover:bg-green-800/30 group-hover:scale-110 transition-all duration-200">
                  <Github className="w-6 h-6" />
                </div>
              </a>
              <a 
                href="https://linkedin.com/in/kusumanchi-srinivas" 
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-400 dark:text-gray-300 hover:text-green-400 dark:hover:text-green-300 transition-all duration-200"
                title="LinkedIn"
              >
                <div className="p-3 rounded-full bg-gray-800 dark:bg-gray-700 group-hover:bg-green-900/30 dark:group-hover:bg-green-800/30 group-hover:scale-110 transition-all duration-200">
                  <Linkedin className="w-6 h-6" />
                </div>
              </a>
              <a 
                href="https://leetcode.com/Ksrinivas2304" 
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-400 dark:text-gray-300 hover:text-green-400 dark:hover:text-green-300 transition-all duration-200"
                title="LeetCode"
              >
                <div className="p-3 rounded-full bg-gray-800 dark:bg-gray-700 group-hover:bg-green-900/30 dark:group-hover:bg-green-800/30 group-hover:scale-110 transition-all duration-200">
                  <Code className="w-6 h-6" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <div className="p-2 rounded-full bg-gray-800/80 dark:bg-gray-700/80 backdrop-blur-sm hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200">
            <ArrowDown className="w-5 h-5 text-green-400 dark:text-green-300" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
