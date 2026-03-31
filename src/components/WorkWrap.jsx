import React from 'react'

function WorkWrap({ icon, title, description }) {
  return (
    <div className="works-box">
      <i className={`fas ${icon}`}></i>
      <h3 className='wrap-title'>{title}</h3>
      <p>{description}</p>
      <a href="#skills" className="btn-learn">
        En savoir plus <i className="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  )
}

export default WorkWrap