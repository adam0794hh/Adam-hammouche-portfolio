import React from 'react'
import "../components/footer.css"

export default function Footer({ activeSection, handleClick }) {
  return (
    <section id='Contact' className={`contact ${activeSection === 'Contact' ? 'show-animate' : ''}`}>
      <div className='contact-container'>
        <div className='contact-details'>
          <div className='contact-title'>
            <h2>Me <span>contacter ici</span><span className="animate scroll" style={{ '--i': 1 }}></span></h2>
            
          </div>
          <div className='contact-email'>
            <a href='mailto:ahammouche@hotmail.com'>
              <img className='email-icon' src='/email.png'></img>
              <span className="animate scroll" style={{ '--i': 2 }}></span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer">
            <div className='footer-text'><p>© 2023 Adam HAMMOUCHE, Tous droits réservés.</p></div>
            <div className='icon-top'><a href='#'><i className="fa-solid fa-arrow-up"></i></a></div>
            <span className="animate scroll" style={{ '--i': 3 }}></span>
        </div>
    </section>
  )
}
