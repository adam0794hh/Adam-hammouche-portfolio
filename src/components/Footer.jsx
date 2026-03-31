import React from 'react'
import "../components/footer.css"

export default function Footer({ activeSection }) {
  return (
    <section id='Contact' className={`contact ${activeSection === 'Contact' ? 'show-animate' : ''}`}>
      <div className="section-header reveal">
        <h2 className="heading">Prêt à <span className="accent">Collaborer ?</span></h2>
        <p>Une idée, un projet ou simplement envie de discuter ? Mon terminal est ouvert.</p>
      </div>

      <div className="contact-card reveal">
        <a href="mailto:adamdev-16@hotmail.com" className="email-link">
          <i className="fa-regular fa-envelope"></i>
          adamdev-16@hotmail.com
        </a>
        <div className="social-footer">
          <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#"><i className="fa-brands fa-github"></i></a>
        </div>
      </div>

      <footer className="final-footer">
        <div className="footer-line"></div>
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Adam Hammouche. Built with Passion & Code.</p>
          <a href="#" className="scroll-top"><i className="fa-solid fa-arrow-up"></i></a>
        </div>
      </footer>
    </section>
  );
}
