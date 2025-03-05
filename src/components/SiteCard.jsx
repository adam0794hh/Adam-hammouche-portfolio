import { useState, useEffect } from 'react';

function SiteCard({ title, description, image, icon }) {
  const [showDescription, setShowDescription] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  // const paragraphs = description.split('\n').map((paragraph, index) => (
  //   <p key={index}>{paragraph}</p>
  // ));

  useEffect(() => {
    // Fonction de rappel qui sera exécutée lorsque la taille de l'écran change
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991); 
    };

    // Ajoute un écouteur d'événement pour les changements de taille de l'écran
    window.addEventListener('resize', handleResize);

    // Vérifie la taille de l'écran au moment du montage initial
    handleResize();

    // Nettoie l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="site-card"
      onMouseEnter={!isMobile ? handleMouseEnter : undefined}
      onMouseLeave={!isMobile ? handleMouseLeave : undefined}
    >
      <img src={image} alt={title} />
      {isMobile || showDescription ? (
        <div className="Portfolio-desc">
          <h4>{title}</h4>
          <p>{description}</p>
          <a><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
      ) : null}
    </div>
  );
}

export default SiteCard;