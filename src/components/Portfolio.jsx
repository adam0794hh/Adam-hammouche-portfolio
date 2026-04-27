import React, { useState } from 'react'
import SiteCard from './SiteCard';
import "../components/Portfolio.css"
import projects from "../data.js"

function Portfolio({ activeSection, handleClick }) {

  // État local pour suivre le filtre actif
  const [activeFilter, setActiveFilter] = useState('all');

  // Fonction de filtrage des projets en fonction du filtre actif
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') {
      return true; // Affiche tous les projets
    } else if (activeFilter === 'site_vitrine') {
      return project.type === 'site_vitrine';
    } else if (activeFilter === 'site_wordpress') {
      return project.type === 'site_wordpress';
    } else if (activeFilter === 'site_fullstack') {
      return project.type === 'site_fullstack';
    }
    return false;
  });
  return (
    <section id='Portfolio' className={`portfolio ${activeSection === 'Portfolio' ? 'show-animate' : ''}`}>
      <div className="section-header reveal">
        <h2 className="heading">Projets <span className="accent">Sélectionnés</span></h2>
        <p>Une collection de mes travaux les plus récents.</p>
      </div>

      <div className='filter-container reveal'>
        <button className={activeFilter === 'all' ? 'filter-btn active' : 'filter-btn'} onClick={() => setActiveFilter('all')}>Tous</button>
        <button className={activeFilter === 'site_vitrine' ? 'filter-btn active' : 'filter-btn'} onClick={() => setActiveFilter('site_vitrine')}>Vitrines</button>
        <button className={activeFilter === 'site_wordpress' ? 'filter-btn active' : 'filter-btn'} onClick={() => setActiveFilter('site_wordpress')}>WordPress</button>
        <button className={activeFilter === 'site_fullstack' ? 'filter-btn active' : 'filter-btn'} onClick={() => setActiveFilter('site_fullstack')}>FullStack</button>
      </div>

      <div className="site-grid reveal">
        {filteredProjects.map((project) => (
          <a target='_blank' rel='noopener noreferrer' href={project.url} key={project.id} className="grid-item">
            <SiteCard
              title={project.title}
              description={project.description}
              image={project.image}
              testimonial={project.testimonial}
              featured={project.featured}
            />
          </a>
        ))}
      </div>
    </section>
  )
}

export default Portfolio