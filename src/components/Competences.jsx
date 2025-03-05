import React, { useState } from 'react';
import "./competences.css";

function Competences({ activeSection }) {
  return (
    <section id='skills' className={`skills ${activeSection === 'skills' ? 'show-animate' : ''}`}>
      <h2>Mes <span>Competences</span></h2>
      <div className="skills-row">
        <div className="skills-column">
          <h3 className="title">Skills Code</h3>
          <div className="skills-box">
            <div className="skills-content">

              <div className="progress">
                <h3>HTML <span>90%</span></h3>
                <div className="bar"><span className='html'></span></div>
              </div>

              <div className="progress">
                <h3>CSS <span>80%</span></h3>
                <div className="bar"><span className='css'></span></div>
              </div>

              <div className="progress">
                <h3>JavaScript <span>70%</span></h3>
                <div className="bar"><span className='js'></span></div>
              </div>

              <div className="progress">
                <h3>React <span>70%</span></h3>
                <div className="bar"><span className='react'></span></div>
              </div>

              <div className="progress">
                <h3>WorldPress <span>70%</span></h3>
                <div className="bar"><span className='wp'></span></div>
              </div>

              <div className="progress">
                <h3>React Native <span>60%</span></h3>
                <div className="bar"><span className='rnative'></span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-column">
          <h3 className="title">Repo GitHub</h3>
          <div className="skills-box">
            <div className="skills-content">

              <div className="git-contain">
                <h3> Projet BOOKI</h3>
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/adam0794hh/Hammouche_Adam_2_code_112022.git'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>

              <div className="git-contain">
                <h3> Projet Oh my Food</h3>
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/adam0794hh/OC-Project-Oh-my-food.git'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>

              <div className="git-contain">
                <h3>Projet Nina Carducci</h3>
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/adam0794hh/ninacarducci.github.io-main.git'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>

              <div className="git-contain">
                <h3>Projet Kasa</h3>
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/adam0794hh/kasa.git'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>

              <div className="git-contain">
                <h3>Projet Print It</h3>
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/adam0794hh/ProjetPrintit.git'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Competences
