import React, { useEffect, useRef, useState } from 'react'
import "../components/works.css"
import WorkWrap from './WorkWrap'

function Works({ activeSection }) {
  return (
    <section id='Works' className={`works ${activeSection === 'Works' ? 'show-animate' : ''}`}>
      <div className="section-header reveal">
        <h2 className='heading'>Mes <span className="accent">Services</span></h2>
        <p>Expertise complète en conception et développement digital.</p>
      </div>
      <div className='works-grid reveal'>
        <WorkWrap
          title={"APPLICATIONS E-COMMERCE"}
          description={"Conception d'applications e-commerce modernes, sécurisées et optimisées pour la conversion."}
          icon={"fa-shopping-cart"}
        />
        <WorkWrap
          title={"WEB & MOBILE"}
          description={"Développement multi-plateforme garantissant une expérience fluide sur tous les terminaux."}
          icon={"fa-mobile-alt"}
        />
        <WorkWrap
          title={"ACCESSIBILITÉ & UX"}
          description={"Engagement fort pour une inclusion numérique totale et une ergonomie sans compromis."}
          icon={"fa-universal-access"}
        />
      </div>
    </section>
  )
}

export default Works