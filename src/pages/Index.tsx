
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import CertificationsSection from '../components/CertificationsSection';
import AchievementsSection from '../components/AchievementsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';
import ScrollProgress from '../components/ScrollProgress';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <ScrollProgress />
      
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <section id="home" aria-label="Hero section">
          <HeroSection />
        </section>
        <section id="about" aria-label="About section">
          <AboutSection />
        </section>
        <section id="skills" aria-label="Skills section">
          <SkillsSection />
        </section>
        <section id="experience" aria-label="Experience section">
          <ExperienceSection />
        </section>
        <section id="projects" aria-label="Projects section">
          <ProjectsSection />
        </section>
        <section id="certifications" aria-label="Certifications section">
          <CertificationsSection />
        </section>
        <section id="achievements" aria-label="Achievements section">
          <AchievementsSection />
        </section>
        <section id="contact" aria-label="Contact section">
          <ContactSection />
        </section>
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default Index;
