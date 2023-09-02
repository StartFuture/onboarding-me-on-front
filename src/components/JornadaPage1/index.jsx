import React from 'react'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'

function JornadaPage1() {
  return (
    <>

    <section className={styles.sectionContainer}>
        <h1>Olá, Eduardo. <br />
Boas-vindas à Jornada Gamificada da EmpresaNova.</h1>

        <p>Para iniciar, assista o vídeo que preparamos para você.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QXd1JwThTFQ?si=2K5iUrwTZCNVDDso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <NavLink className={styles.navLink} to='/jornada/page2' >Continuar</NavLink> 
    </section>



      
    
    </>
  )
}

export default JornadaPage1