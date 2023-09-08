import React from 'react'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'
import card1Img from '../../assets/JornadaPage3Card1.png'
import card2Img from '../../assets/JornadaPage3Card2.png'
import imgPoints from '../../assets/JornadaPrincipiosPage5CongratsImg.png'

function JornadaPrincipiosPage5() {
  return (
    <>

    <section className={styles.sectionContainer}>
      <div className={styles.congratulationsText}>
         <h1>Game concluído :)</h1>
        <h3>Você está por dentro das ferramentas. </h3>
       
      </div>

      <img src={imgPoints} alt="" />

    
       <NavLink className={styles.navLink}>Continuar</NavLink>
      
        
    </section>



      
    
    </>
  )
}

export default JornadaPrincipiosPage5