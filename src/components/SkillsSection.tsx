
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
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 88 }
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Tech Paradigms',
      skills: [
        { name: 'Object Oriented Programming', level: 85 },
        { name: 'Data Structures & Algorithms', level: 80 },
        { name: 'CS Fundamentals', level: 82 }
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML/CSS', level: 92 },
        { name: 'Node.js', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'REST API', level: 88 }
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Database & Cloud',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'Firebase', level: 80 },
        { name: 'AWS', level: 82 },
        { name: 'GCP', level: 75 }
      ],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Frameworks & Tools',
      skills: [
        { name: 'Spring', level: 78 },
        { name: 'Bootstrap', level: 88 },
        { name: 'Tailwind', level: 90 },
        { name: 'Flask/Django', level: 82 },
        { name: 'Version Control', level: 85 }
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Programming Languages, Frameworks, and Cloud Platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={category.title} className="p-6 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className={`text-xl font-semibold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
