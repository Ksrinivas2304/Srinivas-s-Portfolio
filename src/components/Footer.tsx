
import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Kusumanchi Srinivas
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Developer passionate about creating innovative web solutions 
                and scalable cloud applications.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#skills" className="block text-gray-400 hover:text-white transition-colors">Skills</a>
                <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Connect</h4>
              <div className="flex space-x-4 mb-4">
                <a 
                  href="https://github.com/KusumanchiSrinivas" 
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/kusumanchi-srinivas/" 
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.leetcode.com/ksrinivas2304" 
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
                  title="LeetCode"
                >
                  <Code className="w-5 h-5" />
                </a>
              </div>
              <a 
                href="/Photos/Kusumanchi_Srinivas.pdf"
                download="Kusumanchi_Srinivas.pdf"
                className="inline-block bg-gradient-to-r from-primary to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Kusumanchi Srinivas. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
