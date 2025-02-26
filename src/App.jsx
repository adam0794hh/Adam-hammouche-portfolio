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

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  }

  return (
    <div>
      <Navbar activeSection={activeSection} handleNavClick={handleNavClick} />
      <Cover activeSection={activeSection}/>
      <Works activeSection={activeSection} handleClick={handleNavClick} />
      <Portfolio activeSection={activeSection} handleClick={handleNavClick} />
      <Competences activeSection={activeSection} handleClick={handleNavClick} />
      <Formation activeSection={activeSection} handleClick={handleNavClick} />
      <Footer activeSection={activeSection} handleClick={handleNavClick} />
    </div>
  );
}

export default App
