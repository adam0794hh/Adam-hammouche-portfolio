import React from 'react'

function WorkWrap({ icon, title, description }) {
  return (
    <div className="works-box">
      <i className={`fas ${icon}`}></i>
      <h3 className='wrap-title'>{title}</h3>
      <p>{description}</p>
      <a href="#" className="btn2">En savoir plus</a>
    </div>
  )
}

export default WorkWrap