
import React from 'react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Kusumanchi Srinivas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Full Stack Development & Cloud Expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-8 border-none shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A passionate technology enthusiast with a deep commitment to problem-solving and continuous learning. 
                  I specialize in creating innovative web solutions that bridge the gap between complex technical 
                  requirements and user-friendly experiences.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700"><strong>Focus Areas:</strong> Full Stack Development, Cloud Computing, Machine Learning</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-700"><strong>Education:</strong> Sagi Ramakrishnam Raju Engineering College (CGPA: 8.55)</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                    <span className="text-gray-700"><strong>Leadership:</strong> Orchestrated Prajwalan2k24 national-level hackathon</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face" 
                  alt="Kusumanchi Srinivas - Full Stack Developer"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
              <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
