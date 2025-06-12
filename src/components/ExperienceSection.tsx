
import React from 'react';
import { Card } from '@/components/ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Anedium Pvt Ltd',
      period: 'Sep 2024 - Nov 2024',
      logo: '/Photos/Anedium.png',
      description: [
        'Developing a career recommendation platform using the MERN stack (MongoDB, Express, React, Node.js) to provide personalized career guidance, job opportunities, and aptitude tests tailored to global educational backgrounds.',
        'Collaborating with cross-functional teams to integrate real-time career trend analysis, user feedback mechanisms, and interactive tools aimed at enhancing user engagement and satisfaction.'
      ],
      color: 'from-green-600 to-emerald-500'
    },
    {
      title: 'AWS Cloud Computing Intern',
      company: 'Blackbucks Pvt Ltd',
      period: 'Jul 2023 - Aug 2023',
      logo: '/Photos/BlackBucks.png',
      description: [
        'Gained hands-on experience in AWS services, including EC2, S3, and RDS, while assisting in the deployment and maintenance of cloud-based solutions.',
        'Engineered a high-performance web application by integrating Amazon Polly, optimizing translation processes, increasing operational efficiency by 30%, and reducing user wait times by 15%.'
      ],
      color: 'from-emerald-600 to-green-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Full Stack Development & AWS Cloud Internships
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-emerald-500 transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={exp.company + ' logo'}
                      className="absolute left-4 md:left-1/2 w-9 h-9 object-contain bg-gray-800 rounded-full shadow transform -translate-x-1/2 md:-translate-x-1/2 border-green-500 border-2"
                      style={{ zIndex: 2 }}
                    />
                  ) : (
                    <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-green-500 rounded-full transform -translate-x-1/2 md:-translate-x-1/2"></div>
                  )}

                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                    <Card className="p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800 border-gray-700">
                      <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-white text-sm font-medium mb-4`}>
                        {exp.period}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-lg text-green-400 font-semibold mb-4">{exp.company}</p>
                      
                      <div className="space-y-3">
                        {exp.description.map((desc, descIndex) => (
                          <p key={descIndex} className="text-gray-300 leading-relaxed">
                            {desc}
                          </p>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
