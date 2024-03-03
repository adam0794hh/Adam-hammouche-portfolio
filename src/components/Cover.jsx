import React, { useState } from 'react';
import "../components/cover.css"

function Cover() {
  return (
    <section id='home' className='home'>
      <div className='home-content'>
        <h1>Hello, Je suis <span>Adam Hammouche</span></h1>
        <div className="text-animate">
          <h3>Devloppeur FrontEnd</h3>
        </div>
        <p> professionnel spécialisé dans la création de designs modernes et réactifs pour le web et le mobile. Mon objectif est de développer des interfaces utilisateur innovantes et esthétiques. Explorez mon portfolio pour découvrir mes projets.</p>
        <div className="btn-box">
          <a href="#Works" className="btn">Decouvrir</a>
          <a href="#Contact" className="btn">Me Contacter</a>
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
      </div>

      <div className="img-cover">
      </div>


    </section>
  );
}

export default Cover