
import React from 'react';
import { Card } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CertificationsSection = () => {
  const sectionRef = useScrollAnimation();

  const certifications = [
    {
      title: 'CCNA Certifications',
      description: 'Networking Fundamentals, Switching, Routing, Wireless Essentials, and Enterprise Networking, Security, and Automation',
      icon: '🌐',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'PMKVY 4.0 Certification',
      description: 'Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0) certified Software developer associate',
      icon: '🏆',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Prompt Engineering Course',
      description: 'Certificate of completion of Prompt Engineering Course in Coursera',
      icon: '🤖',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'SQL Certification',
      description: 'Certificate in SQL(Basic) from HackerRank',
      icon: '💾',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Java Full Stack Certification',
      description: 'Java Full Stack Certification - Wipro TalentNext Digital Skills Readiness Program',
      icon: '☕',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section 
      id="certifications" 
      className="py-20 bg-white dark:bg-gray-900"
      aria-labelledby="certifications-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={sectionRef}
            className="text-center mb-16 animate-on-scroll"
          >
            <h2 
              id="certifications-heading"
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Certifications & Achievements
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Enhancing Technical Proficiency Through Continuous Learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.title}
                className="group p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift animate-on-scroll focus-ring"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: 'translateZ(0)'
                }}
                tabIndex={0}
                role="article"
                aria-labelledby={`cert-title-${index}`}
                aria-describedby={`cert-desc-${index}`}
              >
                <div className="text-center">
                  <div 
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    role="img"
                    aria-label={`${cert.title} icon`}
                  >
                    {cert.icon}
                  </div>
                  
                  <h3 
                    id={`cert-title-${index}`}
                    className={`text-xl font-bold mb-3 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}
                  >
                    {cert.title}
                  </h3>
                  
                  <p 
                    id={`cert-desc-${index}`}
                    className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm"
                  >
                    {cert.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
