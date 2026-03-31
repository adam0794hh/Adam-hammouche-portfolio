import { useState, useEffect } from 'react';

function SiteCard({ title, description, image }) {
  return (
    <div className="site-card">
      <img src={image} alt={title} />
      <div className="Portfolio-desc">
        <h4>{title}</h4>
        <p>{description}</p>
        <span className="view-link">Voir le projet <i className="fa-solid fa-arrow-right"></i></span>
      </div>
    </div>
  );
}

export default SiteCard;