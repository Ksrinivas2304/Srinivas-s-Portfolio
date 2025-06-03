
import React from 'react';
import { Card } from '@/components/ui/card';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Kusumanchi Srinivas
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Full Stack Development & Cloud Expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <Card className="p-8 border-none shadow-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  A passionate technology enthusiast with a deep commitment to problem-solving and continuous learning. 
                  I specialize in creating innovative web solutions that bridge the gap between complex technical 
                  requirements and user-friendly experiences.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300"><strong>Focus Areas:</strong> Full Stack Development, Cloud Computing, Machine Learning</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300"><strong>Education:</strong> Sagi Ramakrishnam Raju Engineering College (CGPA: 8.55)</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300"><strong>Leadership:</strong> Orchestrated Prajwalan2k24 national-level hackathon</span>
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

          {/* Container Scroll Animation */}
          <ContainerScroll
            titleComponent={
              <>
                <h3 className="text-4xl font-semibold text-black dark:text-white">
                  Explore My <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Portfolio
                  </span>
                </h3>
              </>
            }
          >
            <img
              src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1400&h=720&fit=crop&crop=center"
              alt="Portfolio showcase"
              className="mx-auto rounded-2xl object-cover h-full object-center"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
