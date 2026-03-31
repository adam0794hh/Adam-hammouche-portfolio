import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import Works from './components/Works';
import Portfolio from './components/Portfolio';
import Competences from './components/Competences';
import Formation from './components/Formation';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const spotlightRef = React.useRef(null);

  React.useEffect(() => {
    // 1. Mouse Spotlight tracking
    const handleMouseMove = (e) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX}px`;
        spotlightRef.current.style.top = `${e.clientY}px`;
      }
    };

    // 2. Intersection Observer (Sections + Reveal elements)
    const sections = document.querySelectorAll('section');
    const revealElements = document.querySelectorAll('.reveal');
    
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { threshold: 0.5 });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
        else entry.target.classList.remove('active');
      });
    }, { threshold: 0.1 });

    window.addEventListener('mousemove', handleMouseMove);
    sections.forEach(s => sectionObserver.observe(s));
    revealElements.forEach(r => revealObserver.observe(r));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      sections.forEach(s => sectionObserver.unobserve(s));
      revealElements.forEach(r => revealObserver.unobserve(r));
    };
  }, []);

  const handleNavClick = (sectionId) => setActiveSection(sectionId);

  return (
    <div className="app-container">
      <div className="mouse-spotlight" ref={spotlightRef}></div>
      
      <div className="aurora-bg">
        <div className="aurora-blob"></div>
        <div className="aurora-blob" style={{ bottom: '-10%', right: '-10%', animationDelay: '-5s', background: 'radial-gradient(circle, rgba(0, 229, 255, 0.2) 0%, transparent 60%)' }}></div>
      </div>

      <Navbar activeSection={activeSection} handleNavClick={handleNavClick} />
      <Cover activeSection={activeSection}/>
      <Works activeSection={activeSection} />
      <Portfolio activeSection={activeSection} />
      <Competences activeSection={activeSection} />
      <Formation activeSection={activeSection} />
      <Footer activeSection={activeSection} />
    </div>
  );
}

export default App
