
import React, { useState, useEffect } from 'react';
import { Download, Link, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    const sectionIds = [
      'home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'
    ];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one closest to the top
          const topMost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b));
          setActiveSection(topMost.target.id);
        }
      },
      { threshold: 0.5 }
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Desktop navigation items (with full name)
  const desktopNavItems = [
    { label: 'KUSUMANCHI SRINIVAS', id: 'home' },
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' }
  ];

  // Mobile navigation items (essential items only)
  const mobileNavItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      {/* Desktop Navigation - Full navigation bar */}
      <nav className="hidden md:block fixed top-2 sm:top-4 left-2 right-2 sm:left-0 sm:right-0 z-50 pointer-events-none">
        <div className="flex justify-center">
          <div className="max-w-6xl w-full mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg pointer-events-auto px-3 sm:px-4">
            <div className="flex items-center justify-between h-14 sm:h-16">
              <div className="flex items-center space-x-6 lg:space-x-8 mx-auto">
                {desktopNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium whitespace-nowrap ${activeSection === item.id ? 'glow-nav' : ''}`}
                  >
                    {item.label}
                  </button>
                ))}
                <a href="/Photos/Kusumanchi_Srinivas.pdf" download="Kusumanchi_Srinivas.pdf">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Hamburger Menu Button */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full shadow-lg text-gray-700 dark:text-gray-300"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {mobileNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium ${activeSection === item.id ? 'text-blue-600 dark:text-blue-400' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-8">
              <a href="/Photos/Kusumanchi_Srinivas.pdf" download="Kusumanchi_Srinivas.pdf">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-4">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
