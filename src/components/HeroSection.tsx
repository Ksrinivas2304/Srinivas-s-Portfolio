
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const skills = ['MERN Stack', 'Node.js', 'React.js', 'AWS', 'Machine Learning'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-600/10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in">
            Kusumanchi Srinivas
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-600 mb-4 animate-fade-in delay-200">
            <span>Full Stack Developer | AWS Cloud Enthusiast</span>
          </div>

          <div className="text-lg md:text-xl text-gray-500 mb-8 animate-fade-in delay-300">
            Building dynamic web experiences and scalable cloud solutions
          </div>

          <div className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in delay-400">
            <span>Specializing in </span>
            <span className="text-blue-600 font-semibold transition-all duration-500">
              {skills[currentSkill]}
            </span>
          </div>

          <div className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in delay-500">
            A passionate Computer Science and Engineering student from Sagi Ramakrishnam Raju Engineering College, 
            transforming ideas into robust applications.
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in delay-600">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in delay-700">
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-lg font-medium"
            >
              GITHUB
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-lg font-medium"
            >
              LINKEDIN
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-lg font-medium"
            >
              LEETCODE
            </a>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
