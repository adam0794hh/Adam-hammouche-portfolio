import React, { useState } from 'react'
import SiteCard from './SiteCard';
import "../components/Portfolio.css"
import projects from "../data"

function Portfolio() {

  // État local pour suivre le filtre actif
  const [activeFilter, setActiveFilter] = useState('all');

  // Fonction de filtrage des projets en fonction du filtre actif
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') {
      return true; // Afficher tous les projets
    } else if (activeFilter === 'site_vitrine') {
      return project.type === 'site_vitrine'; // Afficher uniquement les projets de type "site_vitrine"
    } else if (activeFilter === 'site_dynamique') {
      return project.type === 'site_dynamique'; // Afficher uniquement les projets de type "site_dynamique"
    }
    return false;
  });
  return (
    <section id='Portfolio'>
      <div className='filter-button'>
        <div className='portfolio-title'>
          <h2>Mon <span>Portfolio</span></h2>
        </div>
        <div className="button-box">
          <button
            className={activeFilter === 'all' ? 'button active' : 'button'}
            onClick={() => setActiveFilter('all')}
          >
            Tous
          </button>
          <button
            className={activeFilter === 'site_vitrine' ? 'button active' : 'button'}
            onClick={() => setActiveFilter('site_vitrine')}
          >
            Sites Vitrines
          </button>
          <button
            className={activeFilter === 'site_dynamique' ? 'button active' : 'button'}
            onClick={() => setActiveFilter('site_dynamique')}
          >
            Sites Dynamiques
          </button>
        </div>
      </div>
      <div className="site-cards-container">
        {filteredProjects.map((project) => (
          <a target='_blank' rel='noopener noreferrer' href={project.url} key={project.id}>
            <SiteCard
              title={project.title}
              description={project.description}
              image={project.image}
              className={project.type !== activeFilter && 'card-disappear'}
            />
          </a>
        ))}
      </div>
    </section>
  )
}

export default Portfolio