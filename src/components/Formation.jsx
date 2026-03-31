import React, { useState } from 'react'
import "../components/formation.css"

function Formation({ activeSection }) {
  return (
    <section id='formation' className={`formation ${activeSection === 'formation' ? 'show-animate' : ''}`}>
      <div className="section-header reveal">
        <h2 className="heading">Mon <span className="accent">Parcours</span></h2>
        <p>Formation académique et certifications professionnelles.</p>
      </div>

      <div className="formation-grid reveal">
        <div className="formation-card">
          <div className="card-tag">Certification</div>
          <h3 className="card-title">Intégrateur Web</h3>
          <p className="card-org">OpenClassrooms</p>
          <p className="card-desc">Maîtrise de l'intégration web, du responsive design et des animations CSS avancées. Gestion de projets complexes de la maquette à la mise en ligne.</p>
        </div>

        <div className="formation-card">
          <div className="card-tag">Spécialisation</div>
          <h3 className="card-title">Développeur Front-End React</h3>
          <p className="card-org">Auto-formation & Projets</p>
          <p className="card-desc">Approfondissement de l'écosystème React, gestion d'état complexe et optimisation des performances.</p>
        </div>

        <div className="formation-card philosophy">
          <h3 className="card-title">Ma Philosophie</h3>
          <p className="card-desc">"Allier l'esthétique à la performance technique pour créer des produits digitaux qui marquent les esprits."</p>
          <div className="btn-wrapper">
             <a href="#Contact" className="btn btn-secondary">Discutons de votre projet</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Formation