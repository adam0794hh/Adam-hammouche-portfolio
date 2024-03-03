import React, { useEffect, useRef, useState } from 'react'
import "../components/works.css"
import WorkWrap from './WorkWrap'

function Works() {
  return (
    <section id='Works' className='works'>
      <h2 className='heading'>Mes <span>Services</span></h2>
      <div className='works-container'>
        <WorkWrap
          title={"APPLICATIONS E-COMMERCE"}
          description={"Mon expertise en développement web me permet de concevoir des applications e-commerce conviviales et hautement performantes."}
          icon={"fa-shopping-cart"}
        />
        <WorkWrap
          title={"APPLICATIONS WEB & MOBILES"}
          description={"Je développe des applications web et mobiles qui s'adaptent à tous les supports : smartphones, tablettes et ordinateurs de bureau."}
          icon={"fa-mobile-alt"}
        />
        <WorkWrap
          title={"ENGAGEMENT D'ACCESSIBILITÉ"}
          description={"L'accessibilité est une priorité. Je m'efforce de rendre vos applications accessibles à tous, y compris aux personnes en situation de handicap."}
          icon={"fa-universal-access"}
        />
      </div>
    </section>
  )
}

export default Works