import React, { useState } from 'react'
import SiteCard from './SiteCard';
import "../components/Portfolio.css"
import projects from "../data"

function Portfolio({ activeSection, handleClick }) {

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
    } else if (activeFilter === 'site_wordpress') {
      return project.type === 'site_wordpress'; // Afficher uniquement les projets de type "site_wordpress"
    } else if (activeFilter === 'site_fullstack') {
      return project.type === 'site_fullstack'; // Afficher uniquement les projets de type "site_fullstack"
    }
    return false;
  });
  return (
    <section id='Portfolio' className={`portfolio ${activeSection === 'Portfolio' ? 'show-animate' : ''}`}>
      <div className='filter-button'>
        <div className='portfolio-title'>
          <h2>Mon <span>Portfolio</span></h2>
        </div>
        <div className="button-box">
          <div className='box-1' >
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
            {/* <button
              className={activeFilter === 'site_dynamique' ? 'button active' : 'button'}
              onClick={() => setActiveFilter('site_dynamique')}
            >
              Sites Dynamiques
            </button> */}
          </div>
          <div className='box-1'>
            <button
              className={activeFilter === 'site_wordpress' ? 'button active' : 'button'}
              onClick={() => setActiveFilter('site_wordpress')}
            >
              Sites Wordpress
            </button>
            <button
              className={activeFilter === 'site_fullstack' ? 'button active' : 'button'}
              onClick={() => setActiveFilter('site_fullstack')}
            >
              Sites Fullstack
            </button>
          </div>
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