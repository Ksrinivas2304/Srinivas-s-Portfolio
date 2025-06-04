
import React from 'react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { ImageSwiper } from '@/components/ui/image-swiper';

const AboutSection = () => {
  const imageUrls = "/Photos/ChatGPT Image Apr 3, 2025, 07_11_52 PM.jpg,/Photos/WhatsApp Image 2025-04-03 at 11.23.36_4fc37d27.jpg,/Photos/WhatsApp Image 2024-04-06 at 15.55.22_ac487fd4.jpg";

  return (
    <section id="about" className="bg-white dark:bg-gray-900 pb-8">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl md:text-5xl font-semibold text-black dark:text-white">
              About <br />
              <span className="block text-4xl md:text-6xl font-bold mt-1 leading-none bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Kusumanchi Srinivas
              </span>
            </h2>
          </>
        }
      >
        <div className="w-full bg-white dark:bg-zinc-900 rounded-2xl p-4 md:p-8 overflow-y-auto min-h-[20rem] h-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
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

            <div className="relative flex items-center justify-center">
              <ImageSwiper 
                images={imageUrls} 
                cardWidth={250} 
                cardHeight={300} 
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default AboutSection;
