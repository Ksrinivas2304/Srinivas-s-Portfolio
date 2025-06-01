
import React from 'react';
import { Card } from '@/components/ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Anedium Pvt Ltd',
      period: 'Sep 2024 - Nov 2024',
      description: [
        'Developing a career recommendation platform using the MERN stack (MongoDB, Express, React, Node.js) to provide personalized career guidance, job opportunities, and aptitude tests tailored to global educational backgrounds.',
        'Collaborating with cross-functional teams to integrate real-time career trend analysis, user feedback mechanisms, and interactive tools aimed at enhancing user engagement and satisfaction.'
      ],
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'AWS Cloud Computing Intern',
      company: 'Blackbucks Pvt Ltd',
      period: 'Jul 2023 - Aug 2023',
      description: [
        'Gained hands-on experience in AWS services, including EC2, S3, and RDS, while assisting in the deployment and maintenance of cloud-based solutions.',
        'Engineered a high-performance web application by integrating Amazon Polly, optimizing translation processes, increasing operational efficiency by 30%, and reducing user wait times by 15%.'
      ],
      color: 'from-green-500 to-blue-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Full Stack Development & AWS Cloud Internships
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full transform md:-translate-x-2"></div>

                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                    <Card className="p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-white text-sm font-medium mb-4`}>
                        {exp.period}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold mb-4">{exp.company}</p>
                      
                      <div className="space-y-3">
                        {exp.description.map((desc, descIndex) => (
                          <p key={descIndex} className="text-gray-700 leading-relaxed">
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
