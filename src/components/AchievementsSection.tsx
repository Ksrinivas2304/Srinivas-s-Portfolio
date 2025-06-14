
import React from 'react';
import { Card } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AchievementsSection = () => {
  const sectionRef = useScrollAnimation();

  const achievements = [
    {
      title: 'HackerRank 5-Star Rating',
      description: 'Achieved 5-star rating in Java and OOP concepts on HackerRank',
      icon: '⭐',
      stat: '5 Stars',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'LeetCode Problem Solver',
      description: 'Solved 100+ problems in LeetCode, demonstrating strong algorithmic thinking',
      icon: '💻',
      stat: '100+',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Technical Leadership',
      description: 'Currently serving as Technical Support Lead and Senior Body Member of Association of Computer Engineers, Dept of CSE, SRKR',
      icon: '👨‍💼',
      stat: 'Leader',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Hackathon Organizer',
      description: 'Orchestrated Prajwalan2k24 national-level hackathon, demonstrating agile leadership and managing 350+ participants',
      icon: '🚀',
      stat: '350+ Participants',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Workshop Facilitator',
      description: 'Conducted a workshop on resume building and career guidance attended by 300 students',
      icon: '🎓',
      stat: '300 Students',
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <section 
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500"
      aria-labelledby="achievements-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={sectionRef}
            className="text-center mb-16 animate-on-scroll"
          >
            <h2 
              id="achievements-heading"
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Achievements & Leadership
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Impactful Contributions and Recognition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title} 
                className="group p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center animate-on-scroll bg-white dark:bg-gray-800"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  willChange: 'transform'
                }}
                tabIndex={0}
                role="article"
                aria-labelledby={`achievement-title-${index}`}
                aria-describedby={`achievement-desc-${index}`}
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                
                <div 
                  className={`text-3xl font-bold mb-2 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}
                >
                  {achievement.stat}
                </div>
                
                <h3 
                  id={`achievement-title-${index}`}
                  className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4"
                >
                  {achievement.title}
                </h3>
                
                <p 
                  id={`achievement-desc-${index}`}  
                  className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm"
                >
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
