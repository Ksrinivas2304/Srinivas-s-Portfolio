
import React from 'react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold text-black dark:text-white">
              About <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Kusumanchi Srinivas
              </span>
            </h2>
          </>
        }
      >
        <div className="h-full w-full bg-white dark:bg-zinc-900 rounded-2xl p-8 overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center h-full">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  A passionate technology enthusiast with a deep commitment to problem-solving and continuous learning. 
                  I specialize in creating innovative web solutions that bridge the gap between complex technical 
                  requirements and user-friendly experiences.
                </p>
                
                <div className="space-y-3">
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
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face" 
                  alt="Kusumanchi Srinivas - Full Stack Developer"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover"
                  draggable={false}
                />
              </div>
              <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default AboutSection;
