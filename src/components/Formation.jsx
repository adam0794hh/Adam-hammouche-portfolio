import React from 'react'
import "../components/formation.css"

function Formation() {
    return (
        <section id='formation' className='formation'>
            <h2 className="heading">Ma <span>Formation</span></h2>

            <div className="formation-img">
                <img src="/about.jpg" alt="" />
                <span className="circle-spin"></span>
            </div>

            <div className="formation-content">
                <h3>Devlopper FrontEnd</h3>
                <p>Grâce à ma formation approfondie en tant qu'Intégrateur web, j'ai développé un vaste ensemble de compétences qui englobe la conception complète d'applications web réactives, aussi bien pour les plateformes mobiles Android que iOS. Mon savoir-faire s'étend également à l'animation de pages web, la création d'interfaces fonctionnelles, l'optimisation des performances, la maintenance de sites existants, et même la gestion intégrale de projets web, de leur conception initiale jusqu'à leur réalisation complète. Fort de cette expertise polyvalente, je suis en mesure d'apporter à chaque projet en ligne une esthétique élégante couplée à une fonctionnalité optimale. Ma passion pour l'intégration web se reflète dans mon engagement à offrir des solutions qui allient beauté visuelle et performance, faisant de moi un collaborateur précieux pour tout projet où ces qualités sont essentielles.
                </p>
                <a href="#Contact" className="forma-btn">Me Contacter</a>
            </div>

        </section>
    )
}

export default Formation