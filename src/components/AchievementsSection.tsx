
import React from 'react';
import { Card } from '@/components/ui/card';

const AchievementsSection = () => {
  const achievements = [
    {
      title: 'HackerRank 5-Star Rating',
      description: 'Achieved 5-star rating in Java and OOP concepts on HackerRank',
      icon: '⭐',
      stat: '5 Stars',
      color: 'from-yellow-500 to-green-500'
    },
    {
      title: 'LeetCode Problem Solver',
      description: 'Solved 100+ problems in LeetCode, demonstrating strong algorithmic thinking',
      icon: '💻',
      stat: '100+',
      color: 'from-green-600 to-emerald-500'
    },
    {
      title: 'Technical Leadership',
      description: 'Currently serving as Technical Support Lead and Senior Body Member of Association of Computer Engineers, Dept of CSE, SRKR',
      icon: '👨‍💼',
      stat: 'Leader',
      color: 'from-emerald-600 to-green-500'
    },
    {
      title: 'Hackathon Organizer',
      description: 'Orchestrated Prajwalan2k24 national-level hackathon, demonstrating agile leadership and managing 350+ participants',
      icon: '🚀',
      stat: '350+ Participants',
      color: 'from-teal-600 to-green-600'
    },
    {
      title: 'Workshop Facilitator',
      description: 'Conducted a workshop on resume building and career guidance attended by 300 students',
      icon: '🎓',
      stat: '300 Students',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              Achievements & Leadership
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Impactful Contributions and Recognition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center bg-gray-800 border-gray-700">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                
                <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                  {achievement.stat}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-sm">
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
