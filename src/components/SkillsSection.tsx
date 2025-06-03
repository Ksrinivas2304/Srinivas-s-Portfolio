import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', logo: '🐍', level: 90 },
        { name: 'Java', logo: '☕', level: 85 },
        { name: 'JavaScript', logo: '🟨', level: 88 }
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Tech Paradigms',
      skills: [
        { name: 'OOP', logo: '🔧', level: 85 },
        { name: 'DSA', logo: '🧮', level: 80 },
        { name: 'CS Fundamentals', logo: '💻', level: 82 }
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML/CSS', logo: '🌐', level: 92 },
        { name: 'Node.js', logo: '🟢', level: 85 },
        { name: 'React.js', logo: '⚛️', level: 80 },
        { name: 'REST API', logo: '🔌', level: 88 }
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Database & Cloud',
      skills: [
        { name: 'MySQL', logo: '🗃️', level: 85 },
        { name: 'Firebase', logo: '🔥', level: 80 },
        { name: 'AWS', logo: '☁️', level: 82 },
        { name: 'GCP', logo: '🌤️', level: 75 }
      ],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Frameworks & Tools',
      skills: [
        { name: 'Spring', logo: '🍃', level: 78 },
        { name: 'Bootstrap', logo: '🅱️', level: 88 },
        { name: 'Tailwind', logo: '🎨', level: 90 },
        { name: 'Flask/Django', logo: '🐍', level: 82 },
        { name: 'Version Control', logo: '📚', level: 85 }
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const floatingLogos = [
    { emoji: '🐍', name: 'Python', delay: 0 },
    { emoji: '☕', name: 'Java', delay: 1 },
    { emoji: '🟨', name: 'JavaScript', delay: 2 },
    { emoji: '⚛️', name: 'React', delay: 3 },
    { emoji: '🟢', name: 'Node.js', delay: 4 },
    { emoji: '☁️', name: 'AWS', delay: 5 },
    { emoji: '🔥', name: 'Firebase', delay: 6 },
    { emoji: '🗃️', name: 'MySQL', delay: 7 },
    { emoji: '🍃', name: 'Spring', delay: 8 },
    { emoji: '🎨', name: 'Tailwind', delay: 9 }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Floating Logos Background */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingLogos.map((logo, index) => (
          <div
            key={logo.name}
            className={`absolute text-4xl opacity-20 dark:opacity-10 animate-bounce`}
            style={{
              left: `${10 + (index % 5) * 20}%`,
              top: `${10 + Math.floor(index / 5) * 30}%`,
              animationDelay: `${logo.delay * 0.5}s`,
              animationDuration: `${3 + (index % 3)}s`
            }}
          >
            {logo.emoji}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Programming Languages, Frameworks, and Cloud Platforms
            </p>
            {/* Moving Skills Banner */}
            <div className="mt-8 overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full py-4">
              <div className="flex animate-scroll-infinite whitespace-nowrap">
                {[...floatingLogos, ...floatingLogos, ...floatingLogos].map((skill, index) => (
                  <span key={index} className="inline-flex items-center mx-6 text-2xl align-middle">
                    <span className="mr-2">{skill.emoji}</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

// NOTE: The marquee CSS animation must be placed in your global CSS file (e.g., src/index.css or src/App.css):
// @keyframes marquee {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-100%); }
// }
// .marquee-track {
//   animation: marquee 20s linear infinite;
// }
