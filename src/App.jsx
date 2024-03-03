import React from 'react';
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import Works from './components/Works';
import Portfolio from './components/Portfolio';
import Competences from './components/Competences';
import Formation from './components/Formation';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Navbar/>
      <Cover/>
      <Works/>
      <Portfolio/>
      <Competences/>
      <Formation/>
      <Footer/>
      
    </div>
  );
}

export default App
