import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import SocialSidebar from './components/SocialSidebar/SocialSidebar';
import ParticleNetwork from './components/common/ParticleNetwork';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  // This effect applies the theme class to the body
  useEffect(() => {
    document.body.className = ''; // Clear existing classes
    document.body.classList.add(`${theme}-mode`);
  }, [theme]);

  // This effect handles page load and scroll animations
  useEffect(() => {
    // On every refresh, scroll to the top of the page
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    // Immediately make the Hero section visible on load
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.classList.add('is-visible');
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id !== 'hero') {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    // Observe all sections except the hero
    const sections = document.querySelectorAll('section:not(#hero)');
    sections.forEach(section => observer.observe(section));

    // Cleanup function to unobserve when the component unmounts
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);


  return (
    <div className="App">
      <ParticleNetwork theme={theme} />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <SocialSidebar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
