
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'News Search Web - Full Stack Project',
      description: 'Engineered a secure web application leveraging Node.js, Express.js, and Firebase for user authentication, enhanced with bcrypt for robust password hashing; improved user security by reducing unauthorized access incidents by 40%. Integrated the GNews API, delivering real-time news search functionality, increased user engagement and kept content fresh, enhancing the application\'s appeal and versatility.',
      technologies: ['Node.js', 'Express.js', 'Firebase', 'bcrypt', 'GNews API'],
      color: 'from-blue-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
    },
    {
      title: 'Phishing Domain Detector - Machine Learning Project',
      description: 'Developed a robust Phishing Domain Detection system with 98% accuracy by leveraging advanced machine learning algorithms and seamlessly integrating AIML models into a user-friendly web interface using the Flask framework. Demonstrated strong debugging skills throughout development, ensuring the system\'s reliability, accuracy, and smooth user experience. Further developing a Google Chrome Extension to enhance accessibility for diverse tech proficiency levels.',
      technologies: ['Machine Learning', 'Flask', 'AIML models', 'Python'],
      color: 'from-green-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
    },
    {
      title: 'Text2Tone - AWS Project',
      description: 'Implemented \'Text2Tone\' using Amazon Polly and Translate, enhancing language conversion efficiency, streamlining text-to-speech in multiple languages. Achieved 40% reduction in conversion time and optimized resource utilization for cost-effectiveness.',
      technologies: ['AWS', 'Amazon Polly', 'Amazon Translate', 'Cloud Computing'],
      color: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Web Development, Machine Learning, and AWS Solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group border-none shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold text-center px-4">{project.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button 
                    className={`w-full bg-gradient-to-r ${project.color} hover:opacity-90 text-white`}
                  >
                    View Project
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
