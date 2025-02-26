import React, { useState } from 'react';
import "../components/cover.css"

function Cover({ activeSection }) {
  return (
    <section id='home' className={`home ${activeSection === 'home' ? 'show-animate' : ''}`}>
      <div className='home-content'>
        <h1>Hello, Je suis <span>Adam Hammouche</span><span className="animate" style={{ '--i': 2 }}></span></h1>
        <div className="text-animate">
          <h3>Devloppeur FullStack</h3>
          <span className="animate" style={{ '--i': 3 }}></span>
        </div>
        <p> professionnel spécialisé dans la création de designs modernes et réactifs pour le web et le mobile. Mon objectif est de développer des interfaces utilisateur innovantes et esthétiques. 
          Explorez mon portfolio pour découvrir mes projets.
          <span className="animate" style={{ '--i': 4 }}></span>
        </p>
        <div className="btn-box">
          <a href="#Works" className="btn">Decouvrir</a>
          <a href="#Contact" className="btn">Me Contacter</a>
          <span className="animate" style={{ '--i': 5 }}></span>
        </div>
      </div>

      <div className='social-media'>
        <a href='#'>
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href='#'>
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href='#'>
          <i className="fa-brands fa-instagram" ></i>
        </a>
        <a href='#'>
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <span className="animate" style={{ '--i': 6 }}></span>
      </div>

      <div className="img-cover">
        <span className="animate home-img" style={{ '--i': 7 }}></span>
      </div>
      


    </section>
  );
}

export default Cover