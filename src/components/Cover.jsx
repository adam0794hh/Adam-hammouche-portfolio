import React, { useState } from 'react';
import "../components/cover.css"

function Cover({ activeSection }) {
  return (
    <section id='home' className={`home ${activeSection === 'home' ? 'show-animate' : ''}`}>
      <div className='home-content'>
        <div className="pre-title">Adam Hammouche</div>
        <h1>Devloppeur <span className="accent">FullStack</span></h1>
        <p>Expert en création d'interfaces innovantes, je conçois des expériences web et mobiles modernes, réactives et performantes.</p>
        
        <div className="btn-box">
          <a href="#Portfolio" className="btn btn-primary">Explorer mes projets</a>
          <a href="#Contact" className="btn btn-secondary">Me contacter</a>
        </div>
      </div>

      <div className='social-media'>
        <a href='#'><i className="fa-brands fa-linkedin"></i></a>
        <a href='#'><i className="fa-brands fa-github"></i></a>
        <a href='#'><i className="fa-brands fa-twitter"></i></a>
      </div>

      <div className="hero-visual">
          <div className="radar-circle"></div>
          <div className="radar-circle second"></div>
          <div className="radar-circle third"></div>
          <div className="scanner-line"></div>
          <div className="tech-dots">
             <span></span><span></span><span></span><span></span>
          </div>
          <div className="hero-badge">
             <span className="mono">STATUS: ACTIVE</span>
             <span className="mono">OS: HAMMOUCHE_v2.0</span>
          </div>
      </div>
    </section>
  );
}

export default Cover