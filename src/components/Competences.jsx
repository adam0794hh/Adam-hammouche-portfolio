import React, { useState } from 'react';
import "./competences.css";

function Competences({ activeSection }) {
  const skills = [
    { name: "React", level: "Expert", icon: "fa-brands fa-react" },
    { name: "React Native", level: "Expert", icon: "fa-solid fa-mobile-screen-button" },
    { name: "Node.js", level: "Expert", icon: "fa-brands fa-node-js" },
    { name: "JavaScript", level: "Expert", icon: "fa-brands fa-js" },
    { name: "HTML/CSS", level: "Expert", icon: "fa-brands fa-html5" },
    { name: "WordPress", level: "Advanced", icon: "fa-brands fa-wordpress" },
    { name: "MongoDB", level: "Advanced", icon: "fa-solid fa-database" },
  ];

  return (
    <section id='skills' className={`skills ${activeSection === 'skills' ? 'show-animate' : ''}`}>
      <div className="section-header reveal">
        <h2 className="heading">Expertise <span className="accent">Technique</span></h2>
        <p>Maîtrise des technologies modernes pour le web et le mobile.</p>
      </div>

      <div className="bento-grid reveal">
        {/* Main Skill Card */}
        <div className="bento-card large">
          <h3 className="card-title">FullStack Developer</h3>
          <p className="card-desc">Conception d'architectures robustes avec React et Node.js. Focus sur la performance et l'expérience utilisateur.</p>
          <div className="skill-icons">
             <i className="fa-brands fa-react"></i>
             <i className="fa-brands fa-node-js"></i>
             <i className="fa-brands fa-js"></i>
          </div>
        </div>

        {/* Individual Skills */}
        {skills.map((skill, index) => (
          <div className="bento-card small" key={index}>
            <i className={skill.icon}></i>
            <h4>{skill.name}</h4>
            <span className="level">{skill.level}</span>
          </div>
        ))}

        {/* GitHub Card */}
        <div className="bento-card medium github">
          <h3 className="card-title">GitHub Repos</h3>
          <div className="repo-links">
             <a href="https://github.com/adam0794hh/Sibtbib" target="_blank" rel="noreferrer">Sibtbib Project <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
             <a href="https://github.com/adam0794hh/OC-Project-Oh-my-food" target="_blank" rel="noreferrer">OhMyFood <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
             <a href="https://github.com/adam0794hh/kasa" target="_blank" rel="noreferrer">Kasa React <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Competences
