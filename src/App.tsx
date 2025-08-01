import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import CertificatesSection from './components/sections/CertificatesSection';
import ContactSection from './components/sections/ContactSection';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme } = useTheme();
  
  useEffect(() => {
    document.title = 'PavanKumar Reddy | AI/ML Engineer | Data Analytics & NLP | Full Stack Developer (Python & JavaScript) | Cloud & DevOps (Docker, Kubernetes, CI/CD) | 100+ LeetCode DSA Challenges | Reduced Downtime by 30%';
  }, []);

  return (
    <div className={theme}>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;