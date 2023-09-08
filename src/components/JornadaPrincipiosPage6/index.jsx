import styles from "./styles.module.scss";
import png from '../../assets/JornadaPrincipiosPage6Img.png'
import { NavLink } from "react-router-dom";


export default function JornadaPrincipiosPage6() {


  return (
    <section className={styles.containerSection}>
      <div className={styles.containerSectionFlex}>
        <div className={styles.leftFlex}>
          <h1>Parabéns!<p>Você ganhou uma medalha de ouro!</p> </h1>
          
          <NavLink className={styles.navLink}>Receber Medalha</NavLink>
        </div>

        <div>
          <img src={png} alt="" />
        </div>

      </div>
     
    </section>
  )

}